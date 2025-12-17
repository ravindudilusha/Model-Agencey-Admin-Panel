import svgPaths from "./svg-o48i9wliuu";
import clsx from "clsx";

function ModelerRequests8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[76px] relative shrink-0 w-[926.222px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">{children}</div>
    </div>
  );
}
type Wrapper9Props = {
  additionalClassNames?: string;
};

function Wrapper9({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper9Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container77Props = {
  additionalClassNames?: string;
};

function Container77({ children, additionalClassNames = "" }: React.PropsWithChildren<Container77Props>) {
  return (
    <div className={clsx("h-[36px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[35.986px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">{children}</p>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper5 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper5>;
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return <Wrapper5 additionalClassNames={clsx("h-[32px] relative rounded-[8px] shrink-0", additionalClassNames)}>{children}</Wrapper5>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Card2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[400.431px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[0.889px] pl-[24.889px] pr-[0.889px] pt-[24.889px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type Icon18Props = {
  additionalClassNames?: string;
};

function Icon18({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon18Props>) {
  return (
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </Wrapper2>
  );
}

function ModelerRequests3() {
  return (
    <div className="h-[48.889px] relative shrink-0 w-[926.222px]">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pb-0 pt-[16.889px] px-0 relative size-full">
        <ButtonText text="View Full Details" />
        <ButtonText1 text="Accept" />
        <ButtonText2 text="Reject" />
      </div>
    </div>
  );
}
type ButtonText2Props = {
  text: string;
};

function ButtonText2({ text }: ButtonText2Props) {
  return (
    <Wrapper4 additionalClassNames="bg-[#d4183d] w-[88.528px]">
      <Icon15 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[59px] text-[14px] text-center text-nowrap text-white top-[4px] translate-x-[-50%] whitespace-pre">{text}</p>
    </Wrapper4>
  );
}

function Icon15() {
  return (
    <Wrapper additionalClassNames="absolute left-[10px] top-[8px]">
      <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <Wrapper4 additionalClassNames="bg-[#00a63e] w-[93.5px]">
      <Icon14 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[62.5px] text-[14px] text-center text-nowrap text-white top-[4px] translate-x-[-50%] whitespace-pre">{text}</p>
    </Wrapper4>
  );
}

function Icon14() {
  return (
    <Wrapper additionalClassNames="absolute left-[10px] top-[8px]">
      <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[155.861px]">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[92.89px] text-[14px] text-center text-neutral-950 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <Wrapper additionalClassNames="absolute left-[10.89px] top-[8px]">
      <path d={svgPaths.pb43a980} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}
type BadgeText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BadgeText2({ text, additionalClassNames = "" }: BadgeText2Props) {
  return (
    <div className={clsx("absolute h-[21.764px] rounded-[8px] top-0", additionalClassNames)}>
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.889px] py-[2.889px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ContainerText6Props = {
  text: string;
};

function ContainerText6({ text }: ContainerText6Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[82px]">{text}</p>
    </div>
  );
}
type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[90px]">{text}</p>
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">{text}</p>
    </div>
  );
}
type BadgeText1Props = {
  text: string;
};

function BadgeText1({ text }: BadgeText1Props) {
  return (
    <div className="bg-[#030213] h-[21.764px] relative rounded-[8px] shrink-0 w-[62.986px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[8.889px] py-[2.889px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-2px] w-[143px]">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[20px] items-start left-[339.17px] top-0", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">{text}</p>
    </div>
  );
}
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="absolute h-[20px] left-[234.83px] top-0 w-[74.639px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[75px]">{text}</p>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="absolute h-[20px] left-[98.76px] top-0 w-[106.375px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[107px]">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[20px] items-start top-0 w-[5.694px]", additionalClassNames)}>
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">{text}</p>
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[69.069px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[70px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-neutral-950">{text}</p>
    </div>
  );
}
type OptionTextProps = {
  text: string;
};

function OptionText({ text }: OptionTextProps) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">{text}</p>
    </div>
  );
}

function Container27() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon7 />
    </Wrapper6>
  );
}

function Icon7() {
  return (
    <Wrapper1>
      <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p18406864} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px]">{text}</p>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">{text}</p>
    </div>
  );
}
type BadgeTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeText({ text, additionalClassNames = "" }: BadgeTextProps) {
  return (
    <div className={clsx("bg-[#d4183d] h-[21.764px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[8.889px] py-[2.889px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper7>{text}</Wrapper7>;
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[14px]">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <Icon18 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p28b1aae0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon18>
  );
}

function Container() {
  return (
    <Wrapper6 additionalClassNames="bg-white rounded-[14px] size-[40px]">
      <Icon />
    </Wrapper6>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-nowrap text-white top-[-1.22px] whitespace-pre">Admin Panel</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12px]">Control Center</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[43.986px] relative shrink-0 w-[99.778px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[43.986px] items-center left-[24px] top-[24px] w-[151.778px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <path d={svgPaths.p1f7f4b70} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99.903px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Pending Actions</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[31.986px] items-start left-0 top-0 w-[25.875px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">32</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[33.88px] top-[12.44px] w-[109.764px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">items need attention</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.1)] content-stretch flex flex-col gap-[4px] h-[81.764px] items-start left-[24px] pb-[0.889px] pt-[12.889px] px-[12.889px] rounded-[10px] top-[83.99px] w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(251,44,54,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-[190.639px] relative shrink-0 w-[288px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0px_0px_0.889px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <Wrapper1>
      <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p260aa300} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container7() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon2 />
    </Wrapper6>
  );
}

function Container8() {
  return (
    <Wrapper8>
      <ContainerText text="Overview" />
      <ContainerText1 text="Dashboard home" />
    </Wrapper8>
  );
}

function Container9() {
  return (
    <Container77 additionalClassNames="w-[139.556px]">
      <Container7 />
      <Container8 />
    </Container77>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[16px] w-[256px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <Wrapper1>
      <path d={svgPaths.p2f5eb900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p25397b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p2c4f400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container12() {
  return (
    <Wrapper6 additionalClassNames="bg-black rounded-[10px] size-[36px]">
      <Icon3 />
    </Wrapper6>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Modeler Requests</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[12px]">New applications</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[35.986px] relative shrink-0 w-[111.153px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <Container77 additionalClassNames="w-[159.153px]">
      <Container12 />
      <Container15 />
    </Container77>
  );
}

function Icon4() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}

function Container17() {
  return (
    <div className="h-[21.764px] relative shrink-0 w-[48.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <BadgeText text="5" additionalClassNames="w-[24.444px]" />
        <Icon4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[64px] left-[16px] overflow-clip rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[88px] w-[256px]" data-name="Button">
      <Container18 />
    </div>
  );
}

function Icon5() {
  return (
    <Wrapper1>
      <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container19() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon5 />
    </Wrapper6>
  );
}

function Container20() {
  return (
    <Wrapper8>
      <ContainerText2 text="Signup Verification" />
      <ContainerText3 text="Verify signups" />
    </Wrapper8>
  );
}

function Container21() {
  return (
    <Container77 additionalClassNames="w-[164px]">
      <Container19 />
      <Container20 />
    </Container77>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container21 />
      <BadgeText text="3" additionalClassNames="w-[24.444px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[160px] w-[256px]" data-name="Button">
      <Container22 />
    </div>
  );
}

function Icon6() {
  return (
    <Wrapper1>
      <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p38772900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p2cba2e00} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container23() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon6 />
    </Wrapper6>
  );
}

function Container24() {
  return (
    <div className="h-[35.986px] relative shrink-0 w-[98.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerText2 text="Media Approval" />
        <ContainerText3 text="Review uploads" />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <Container77 additionalClassNames="w-[146.278px]">
      <Container23 />
      <Container24 />
    </Container77>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container25 />
      <BadgeText text="12" additionalClassNames="w-[29.278px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[232px] w-[256px]" data-name="Button">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[35.986px] relative shrink-0 w-[57.861px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerText2 text="Modelers" />
        <ContainerText1 text="All models" />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <Container77 additionalClassNames="w-[105.861px]">
      <Container27 />
      <Container28 />
    </Container77>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[304px] w-[256px]" data-name="Button">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <Wrapper8>
      <ContainerText text="Customers" />
      <ContainerText1 text="Client accounts" />
    </Wrapper8>
  );
}

function Container33() {
  return (
    <Container77 additionalClassNames="w-[128.625px]">
      <Container27 />
      <Container32 />
    </Container77>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[376px] w-[256px]" data-name="Button">
      <Container35 />
    </div>
  );
}

function Icon8() {
  return (
    <Wrapper1>
      <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container36() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon8 />
    </Wrapper6>
  );
}

function Container37() {
  return (
    <div className="h-[35.986px] relative shrink-0 w-[91.792px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerText text="Bookings" />
        <ContainerText1 text="Booking requests" />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <Container77 additionalClassNames="w-[139.792px]">
      <Container36 />
      <Container37 />
    </Container77>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container38 />
      <BadgeText text="8" additionalClassNames="w-[24.444px]" />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[448px] w-[256px]" data-name="Button">
      <Container39 />
    </div>
  );
}

function Icon9() {
  return (
    <Wrapper1>
      <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container40() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon9 />
    </Wrapper6>
  );
}

function Container41() {
  return (
    <Wrapper8>
      <ContainerText text="Payments" />
      <ContainerText1 text="Payment verification" />
    </Wrapper8>
  );
}

function Container42() {
  return (
    <Container77 additionalClassNames="w-[155.194px]">
      <Container40 />
      <Container41 />
    </Container77>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container42 />
      <BadgeText text="4" additionalClassNames="w-[24.694px]" />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[520px] w-[256px]" data-name="Button">
      <Container43 />
    </div>
  );
}

function Icon10() {
  return (
    <Wrapper1>
      <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container44() {
  return (
    <Wrapper6 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon10 />
    </Wrapper6>
  );
}

function Container45() {
  return <Wrapper7>{`Reports & insights`}</Wrapper7>;
}

function Container46() {
  return (
    <div className="h-[35.986px] relative shrink-0 w-[97.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerText text="Analytics" />
        <Container45 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <Container77 additionalClassNames="w-[145.417px]">
      <Container44 />
      <Container46 />
    </Container77>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[592px] w-[256px]" data-name="Button">
      <Container49 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[288px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <Wrapper additionalClassNames="absolute left-[89.38px] top-[10px]">
      <path d={svgPaths.p2c1f680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M14 8H6" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p12257fa0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}

function Button9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Icon11 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[144.88px] text-[14px] text-black text-center text-nowrap top-[6px] translate-x-[-50%] whitespace-pre">Logout</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-[68.889px] relative shrink-0 w-[288px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.889px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[16.889px] px-[16px] relative size-full">
        <Button9 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-[#000000] h-[1013.736px] relative shrink-0 to-[#000000] via-50% via-[#101828] w-[288px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container6 />
        <Navigation />
        <Container50 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[190.556px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">Modeler Requests</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute h-[40px] left-[268px] rounded-[8px] top-0 w-[112.889px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.889px] pl-[-1175.111px] pr-[1288px] pt-[-108.875px] relative size-full">
          <OptionText text="All Status" />
          <OptionText text="Pending" />
          <OptionText text="Accepted" />
          <OptionText text="Rejected" />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Search requests...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon12() {
  return (
    <Wrapper additionalClassNames="absolute left-[12px] top-[10px]">
      <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}

function Container51() {
  return (
    <div className="absolute h-[36px] left-0 top-[2px] w-[256px]" data-name="Container">
      <Input />
      <Icon12 />
    </div>
  );
}

function Container52() {
  return (
    <Wrapper3 additionalClassNames="h-[40px] w-[380.889px]">
      <Dropdown />
      <Container51 />
    </Wrapper3>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <TextText text="ID: REQ001" />
      <Text3 text="•" additionalClassNames="left-[81.07px]" />
      <TextText1 text="NIC: 920123456V" />
      <Text3 text="•" additionalClassNames="left-[217.14px]" />
      <TextText2 text="28 years old" />
      <Text3 text="•" additionalClassNames="left-[321.47px]" />
      <Text4 text="Female" additionalClassNames="w-[44.056px]" />
    </div>
  );
}

function Container55() {
  return (
    <Wrapper9 additionalClassNames="h-[76px] w-[383.222px]">
      <HeadingText text="Sarah Johnson" />
      <Container54 />
      <ParagraphText text="Submitted: 11/23/2025" />
    </Wrapper9>
  );
}

function ModelerRequests() {
  return (
    <ModelerRequests8>
      <Container55 />
      <BadgeText1 text="pending" />
    </ModelerRequests8>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-0 top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Contact" />
      <ContainerText4 text="+94 77 123 4567" />
      <ContainerText4 text="sarah@example.com" />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[235.56px] top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Physical" />
      <ContainerText5 text="Height: 175cm" />
      <ContainerText6 text="Weight: 58kg" />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[55px]">Skin: Fair</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[65px]">Hair: Black</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[471.11px] top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Features" />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[706.67px] top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Experience" />
      <ContainerText4 text="Yes" />
      <ContainerText4 text="Fashion Academy Colombo" />
    </div>
  );
}

function ModelerRequests1() {
  return (
    <Wrapper3 additionalClassNames="h-[60px] w-[926.222px]">
      <Container56 />
      <Container57 />
      <Container60 />
      <Container61 />
    </Wrapper3>
  );
}

function Container62() {
  return (
    <div className="h-[21.764px] relative shrink-0 w-full" data-name="Container">
      <BadgeText2 text="Runway" additionalClassNames="left-0 w-[60.694px]" />
      <BadgeText2 text="Commercial" additionalClassNames="left-[68.69px] w-[82.542px]" />
    </div>
  );
}

function ModelerRequests2() {
  return (
    <Wrapper9 additionalClassNames="h-[45.764px] w-[926.222px]">
      <Text7 text="Interests" />
      <Container62 />
    </Wrapper9>
  );
}

function Card() {
  return (
    <Card2>
      <ModelerRequests />
      <ModelerRequests1 />
      <ModelerRequests2 />
      <ModelerRequests3 />
    </Card2>
  );
}

function Container63() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <TextText text="ID: REQ002" />
      <Text3 text="•" additionalClassNames="left-[81.07px]" />
      <TextText1 text="NIC: 880445789V" />
      <Text3 text="•" additionalClassNames="left-[217.14px]" />
      <TextText2 text="32 years old" />
      <Text3 text="•" additionalClassNames="left-[321.47px]" />
      <Text4 text="Male" additionalClassNames="w-[30.417px]" />
    </div>
  );
}

function Container64() {
  return (
    <Wrapper9 additionalClassNames="h-[76px] w-[369.583px]">
      <HeadingText text="Michael Brown" />
      <Container63 />
      <ParagraphText text="Submitted: 11/22/2025" />
    </Wrapper9>
  );
}

function ModelerRequests4() {
  return (
    <ModelerRequests8>
      <Container64 />
      <BadgeText1 text="pending" />
    </ModelerRequests8>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-0 top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Contact" />
      <ContainerText4 text="+94 71 234 5678" />
      <ContainerText4 text="michael@example.com" />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[235.56px] top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Physical" />
      <ContainerText5 text="Height: 185cm" />
      <ContainerText6 text="Weight: 75kg" />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[85px]">Skin: Medium</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[72px]">Hair: Brown</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[471.11px] top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Features" />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[706.67px] top-0 w-[219.556px]" data-name="Container">
      <Text7 text="Experience" />
      <ContainerText4 text="No" />
    </div>
  );
}

function ModelerRequests5() {
  return (
    <Wrapper3 additionalClassNames="h-[60px] w-[926.222px]">
      <Container65 />
      <Container66 />
      <Container69 />
      <Container70 />
    </Wrapper3>
  );
}

function Container71() {
  return (
    <div className="h-[21.764px] relative shrink-0 w-full" data-name="Container">
      <BadgeText2 text="Commercial" additionalClassNames="left-0 w-[82.542px]" />
      <BadgeText2 text="Fitness" additionalClassNames="left-[90.54px] w-[55.014px]" />
    </div>
  );
}

function ModelerRequests6() {
  return (
    <Wrapper9 additionalClassNames="h-[45.764px] w-[926.222px]">
      <Text7 text="Interests" />
      <Container71 />
    </Wrapper9>
  );
}

function Card1() {
  return (
    <Card2>
      <ModelerRequests4 />
      <ModelerRequests5 />
      <ModelerRequests6 />
      <ModelerRequests3 />
    </Card2>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[816.861px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function ModelerRequests7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[880.861px] items-start relative shrink-0 w-full" data-name="ModelerRequests">
      <Container53 />
      <Container72 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1024px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-0 pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <ModelerRequests7 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[1013.736px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[84.875px] px-0 relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-gray-50 content-stretch flex h-[1013.736px] items-start relative shrink-0 w-full" data-name="AdminDashboard">
      <Sidebar />
      <Container73 />
    </div>
  );
}

function AdminApp() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[1013.736px] items-start relative shrink-0 w-full" data-name="AdminApp">
      <AdminDashboard />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col h-[1013.736px] items-start left-0 top-0 w-[1312px]" data-name="App">
      <AdminApp />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">Modeler Requests</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Manage your platform efficiently</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[51.986px] relative shrink-0 w-[202.069px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <Wrapper2 additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_4_1206)" id="Icon">
        <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
      <defs>
        <clipPath id="clip0_4_1206">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Last updated: Just now</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-gray-100 h-[36px] relative rounded-[10px] shrink-0 w-[196.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon16 />
        <Text5 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex h-[51.986px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function AdminDashboard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84.875px] items-start left-[288px] pb-[0.889px] pt-[16px] px-[24px] top-0 w-[1024px]" data-name="AdminDashboard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container76 />
    </div>
  );
}

function Icon17() {
  return (
    <Icon18 additionalClassNames="absolute left-[16px] top-[16px]">
      <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p28601a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon18>
  );
}

function Text6() {
  return (
    <div className="absolute bg-black content-stretch flex h-[36px] items-start left-[-92.35px] opacity-0 px-[12px] py-[8px] rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[10px] w-[84.347px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Main App</p>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-black left-[1232px] opacity-[0.993] rounded-[2.98262e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[56px] top-[684.44px]" data-name="App">
      <Icon17 />
      <Text6 />
    </div>
  );
}

export default function ModelingBookingPlatform() {
  return (
    <div className="bg-white relative size-full" data-name="Modeling Booking Platform">
      <App />
      <AdminDashboard1 />
      <App1 />
    </div>
  );
}