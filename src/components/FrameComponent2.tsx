import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  rectangle5349?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
  propLineHeight1?: CSSProperties["lineHeight"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  rectangle5349,
  propLineHeight,
  propLineHeight1,
}) => {
  const drManishNStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const watchOnYoutubeStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight1,
    };
  }, [propLineHeight1]);

  return (
    <div
      className={`w-[400px] flex flex-col items-end justify-start text-left text-xl text-black1 font-lato ${className}`}
    >
      <img
        className="w-[406px] relative rounded-t-2xl rounded-b-none h-[232px] object-cover"
        alt=""
        src={rectangle5349}
      />
      <div className="w-[407px] rounded-t-none rounded-b-2xl bg-azure-100 overflow-hidden flex flex-col items-start justify-start p-5 box-border">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <b className="relative" style={drManishNStyle}>
            Dr. Manish N Raval
          </b>
          <div className="w-[353px] relative text-base leading-[18px] whitespace-pre-wrap inline-block">{`Vascular & Endo Vascular Surgeon  Niva ASK Life Sciences, Ahmedabad`}</div>
          <div className="rounded-lg bg-primary flex flex-row items-start justify-start p-3 text-lg text-white">
            <b className="relative" style={watchOnYoutubeStyle}>
              Watch On Youtube
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
