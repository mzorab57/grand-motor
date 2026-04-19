import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "./hover-footer";

const HoverFooterDemo = () => {
  return (
    <div className="relative h-[20rem] overflow-hidden rounded-3xl bg-[#0F0F11]/10">
      <div className="relative z-10 flex h-full items-center justify-center">
        <TextHoverEffect text="GRAND" className="z-10" />
      </div>
      <FooterBackgroundGradient />
    </div>
  );
};

export { HoverFooterDemo };
