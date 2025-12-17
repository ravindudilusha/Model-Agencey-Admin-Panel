import svgPaths from "./svg-z34dbdfhkg";
import clsx from "clsx";

function SignupVerification6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[76px] relative shrink-0 w-[926.222px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">{children}</div>
    </div>
  );
}

function Container71({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[76px] relative shrink-0 w-[237.736px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container70Props = {
  additionalClassNames?: string;
};

function Container70({ children, additionalClassNames = "" }: React.PropsWithChildren<Container70Props>) {
  return (
    <div className={clsx("h-[36px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[35.986px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">{children}</p>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("h-[32px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[60px] relative shrink-0 w-[926.222px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
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
    <div className="bg-white h-[314.667px] relative rounded-[14px] shrink-0 w-full">
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

function SignupVerification2() {
  return (
    <div className="h-[48.889px] relative shrink-0 w-[926.222px]">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pb-0 pt-[16.889px] px-0 relative size-full">
        <Button10 />
        <Button11 />
        <ButtonText text="Reject" />
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
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

function Button11() {
  return (
    <Wrapper4 additionalClassNames="bg-[#00a63e] w-[228.306px]">
      <Icon14 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[129.5px] text-[14px] text-center text-nowrap text-white top-[4px] translate-x-[-50%] whitespace-pre">{`Approve & Send Credentials`}</p>
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

function Button10() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[219.458px]">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[125.39px] text-[14px] text-center text-neutral-950 text-nowrap top-[4px] translate-x-[-50%] whitespace-pre">{`View Details & Documents`}</p>
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
};

function BadgeText2({ text }: BadgeText2Props) {
  return (
    <div className="absolute bg-[#00a63e] border-[0.889px] border-[rgba(0,0,0,0)] border-solid h-[21.764px] left-0 overflow-clip rounded-[8px] top-[21.56px] w-[59.542px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-[8px] text-[12px] text-nowrap text-white top-px whitespace-pre">{text}</p>
    </div>
  );
}
type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <Icon12 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">{text}</p>
    </div>
  );
}

function Icon12() {
  return (
    <Wrapper additionalClassNames="absolute left-0 top-[2px]">
      <path d={svgPaths.p32c00400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p2f10900} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
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
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[107px]">{text}</p>
      </div>
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[219.556px]">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">{text}</p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">{text}</p>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-[5.694px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">{text}</p>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-[101.667px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[102px]">{text}</p>
      </div>
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

function Container27() {
  return (
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon7 />
    </Wrapper5>
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
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper6>{text}</Wrapper6>;
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
    <Wrapper5 additionalClassNames="bg-white rounded-[14px] size-[40px]">
      <Icon />
    </Wrapper5>
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
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon2 />
    </Wrapper5>
  );
}

function Container8() {
  return (
    <Wrapper7>
      <ContainerText text="Overview" />
      <ContainerText1 text="Dashboard home" />
    </Wrapper7>
  );
}

function Container9() {
  return (
    <Container70 additionalClassNames="w-[139.556px]">
      <Container7 />
      <Container8 />
    </Container70>
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
      <path d={svgPaths.p2f5eb900} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p25397b80} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p2c4f400} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container12() {
  return (
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon3 />
    </Wrapper5>
  );
}

function Container13() {
  return (
    <div className="h-[35.986px] relative shrink-0 w-[111.153px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerText2 text="Modeler Requests" />
        <ContainerText3 text="New applications" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <Container70 additionalClassNames="w-[159.153px]">
      <Container12 />
      <Container13 />
    </Container70>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container14 />
      <BadgeText text="5" additionalClassNames="w-[24.444px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[64px] left-[16px] overflow-clip rounded-[14px] top-[88px] w-[256px]" data-name="Button">
      <Container15 />
    </div>
  );
}

function Icon4() {
  return (
    <Wrapper1>
      <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper1>
  );
}

function Container16() {
  return (
    <Wrapper5 additionalClassNames="bg-black rounded-[10px] size-[36px]">
      <Icon4 />
    </Wrapper5>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Signup Verification</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[12px]">Verify signups</p>
    </div>
  );
}

function Container19() {
  return (
    <Wrapper7>
      <Container17 />
      <Container18 />
    </Wrapper7>
  );
}

function Container20() {
  return (
    <Container70 additionalClassNames="w-[164px]">
      <Container16 />
      <Container19 />
    </Container70>
  );
}

function Icon5() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper>
  );
}

function Container21() {
  return (
    <div className="h-[21.764px] relative shrink-0 w-[48.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <BadgeText text="3" additionalClassNames="w-[24.444px]" />
        <Icon5 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[256px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[64px] left-[16px] overflow-clip rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[160px] w-[256px]" data-name="Button">
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
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon6 />
    </Wrapper5>
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
    <Container70 additionalClassNames="w-[146.278px]">
      <Container23 />
      <Container24 />
    </Container70>
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
    <Container70 additionalClassNames="w-[105.861px]">
      <Container27 />
      <Container28 />
    </Container70>
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
    <Wrapper7>
      <ContainerText text="Customers" />
      <ContainerText1 text="Client accounts" />
    </Wrapper7>
  );
}

function Container33() {
  return (
    <Container70 additionalClassNames="w-[128.625px]">
      <Container27 />
      <Container32 />
    </Container70>
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
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon8 />
    </Wrapper5>
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
    <Container70 additionalClassNames="w-[139.792px]">
      <Container36 />
      <Container37 />
    </Container70>
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
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon9 />
    </Wrapper5>
  );
}

function Container41() {
  return (
    <Wrapper7>
      <ContainerText text="Payments" />
      <ContainerText1 text="Payment verification" />
    </Wrapper7>
  );
}

function Container42() {
  return (
    <Container70 additionalClassNames="w-[155.194px]">
      <Container40 />
      <Container41 />
    </Container70>
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
    <Wrapper5 additionalClassNames="bg-[rgba(255,255,255,0.05)] rounded-[10px] size-[36px]">
      <Icon10 />
    </Wrapper5>
  );
}

function Container45() {
  return <Wrapper6>{`Reports & insights`}</Wrapper6>;
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
    <Container70 additionalClassNames="w-[145.417px]">
      <Container44 />
      <Container46 />
    </Container70>
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
    <div className="bg-gradient-to-b from-[#000000] h-[931.528px] relative shrink-0 to-[#000000] via-50% via-[#101828] w-[288px]" data-name="Sidebar">
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
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">Signup Verification</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText text="Ref: REF2025001" />
      <TextText1 text="•" />
      <TextText2 text="NIC: 920123456V" />
    </div>
  );
}

function Container52() {
  return (
    <Container71>
      <HeadingText text="Sarah Johnson" />
      <Container51 />
      <ParagraphText text="Submitted: 11/23/2025" />
    </Container71>
  );
}

function SignupVerification() {
  return (
    <SignupVerification6>
      <Container52 />
      <BadgeText1 text="pending" />
    </SignupVerification6>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-0 top-0 w-[219.556px]" data-name="Container">
      <Text5 text="Contact" />
      <ContainerText4 text="+94 77 123 4567" />
      <ContainerText4 text="sarah@example.com" />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[62px]">$199/year</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[235.56px] top-0 w-[219.556px]" data-name="Container">
      <Text5 text="Plan Selected" />
      <ContainerText4 text="Professional" />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[471.11px] top-0 w-[219.556px]" data-name="Container">
      <Text5 text="Payment" />
      <ContainerText5 text="Payment slip uploaded" />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[60px] left-[706.67px] top-0 w-[219.556px]" data-name="Container">
      <Text6 text="Reference Match" />
      <BadgeText2 text="Verified" />
    </div>
  );
}

function SignupVerification1() {
  return (
    <Wrapper3>
      <Container53 />
      <Container55 />
      <Container56 />
      <Container57 />
    </Wrapper3>
  );
}

function Card() {
  return (
    <Card2>
      <SignupVerification />
      <SignupVerification1 />
      <SignupVerification2 />
    </Card2>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <TextText text="Ref: REF2025002" />
      <TextText1 text="•" />
      <TextText2 text="NIC: 880445789V" />
    </div>
  );
}

function Container59() {
  return (
    <Container71>
      <HeadingText text="Michael Brown" />
      <Container58 />
      <ParagraphText text="Submitted: 11/22/2025" />
    </Container71>
  );
}

function SignupVerification3() {
  return (
    <SignupVerification6>
      <Container59 />
      <BadgeText1 text="pending" />
    </SignupVerification6>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-0 top-0 w-[219.556px]" data-name="Container">
      <Text5 text="Contact" />
      <ContainerText4 text="+94 71 234 5678" />
      <ContainerText4 text="michael@example.com" />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-2px] w-[55px]">$99/year</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[235.56px] top-0 w-[219.556px]" data-name="Container">
      <Text5 text="Plan Selected" />
      <ContainerText4 text="Basic" />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col h-[60px] items-start left-[471.11px] top-0 w-[219.556px]" data-name="Container">
      <Text5 text="Payment" />
      <ContainerText5 text="Payment slip uploaded" />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[60px] left-[706.67px] top-0 w-[219.556px]" data-name="Container">
      <Text6 text="Reference Match" />
      <BadgeText2 text="Verified" />
    </div>
  );
}

function SignupVerification4() {
  return (
    <Wrapper3>
      <Container60 />
      <Container62 />
      <Container63 />
      <Container64 />
    </Wrapper3>
  );
}

function Card1() {
  return (
    <Card2>
      <SignupVerification3 />
      <SignupVerification4 />
      <SignupVerification2 />
    </Card2>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[645.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function SignupVerification5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[701.319px] items-start relative shrink-0 w-full" data-name="SignupVerification">
      <Heading2 />
      <Container65 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1024px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-0 pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <SignupVerification5 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[931.528px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[84.875px] px-0 relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="bg-gray-50 content-stretch flex h-[931.528px] items-start relative shrink-0 w-full" data-name="AdminDashboard">
      <Sidebar />
      <Container66 />
    </div>
  );
}

function AdminApp() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[931.528px] items-start relative shrink-0 w-full" data-name="AdminApp">
      <AdminDashboard />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col h-[931.528px] items-start left-0 top-0 w-[1312px]" data-name="App">
      <AdminApp />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">Signup Verification</p>
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

function Container67() {
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

function Text3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Last updated: Just now</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-gray-100 h-[36px] relative rounded-[10px] shrink-0 w-[196.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
        <Icon16 />
        <Text3 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[51.986px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function AdminDashboard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84.875px] items-start left-[288px] pb-[0.889px] pt-[16px] px-[24px] top-0 w-[1024px]" data-name="AdminDashboard">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container69 />
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

function Text4() {
  return (
    <div className="absolute bg-black content-stretch flex h-[36px] items-start left-[-92.35px] opacity-0 px-[12px] py-[8px] rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[10px] w-[84.347px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Main App</p>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-black left-[1232px] opacity-[0.997] rounded-[2.98262e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[56px] top-[684.44px]" data-name="App">
      <Icon17 />
      <Text4 />
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