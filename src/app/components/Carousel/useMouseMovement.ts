import { useMotionValue, useTransform } from "framer-motion";

export const useMouseMovement = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const YAxisMovement = useTransform(y, [2000, 0], [10, -10]);
  const XAxisMovement = useTransform(x, [0, 2000], [-10, 10]);
  const XAxisMovementDelayed = useTransform(x, [0, 2000], [-15, 15]);

  const handleMouse = (event: React.MouseEvent<Element, MouseEvent>): void => {
    const target: any = event?.currentTarget;
    const rect: DOMRect = target?.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return {
    handleMouse,
    YAxisMovement,
    XAxisMovement,
    XAxisMovementDelayed
  };
}