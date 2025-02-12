import { ReactElement } from "react";

interface ContainerProps {
  children: ReactElement | ReactElement[];
}

export default function PageContainer({
  children,
}: ContainerProps): ReactElement {
  return (
    <div className="w-full h-full max-w-[820px] mx-auto px-4">{children}</div>
  );
}
