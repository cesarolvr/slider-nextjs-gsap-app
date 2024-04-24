import { useMotionValue, useTransform } from "framer-motion";

export const useMouseMovement = () => {
  const xMotionValue = useMotionValue(0);
  const yMotionValue = useMotionValue(0);
  const YAxisMovement = useTransform(yMotionValue, [2000, 0], [10, -10]);
  const XAxisMovement = useTransform(xMotionValue, [0, 2000], [-10, 10]);
  const XAxisMovementDelayed = useTransform(xMotionValue, [0, 2000], [-15, 15]);

  const handleMouse = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent): void => {
    const rect: DOMRect = currentTarget?.getBoundingClientRect();

    xMotionValue.set(clientX - rect.left);
    yMotionValue.set(clientY - rect.top);
  };

  return {
    handleMouse,
    YAxisMovement,
    XAxisMovement,
    XAxisMovementDelayed,
  };
};
