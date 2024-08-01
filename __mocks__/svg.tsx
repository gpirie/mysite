import { JSX, SVGProps } from "react";

const SvgrMock = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return <svg {...props} />;
};

export default SvgrMock;