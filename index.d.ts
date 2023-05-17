interface Options {
  q: string;
  from: string;
  to: string | string[];
  appid?: string;
  secret?: string;
  delay?: number;
}

interface TranslateResult {
  from: string;
  to: string;
  trans_result: {
    src: string;
    dst: string;
  }[];
}

interface NxStatic {
  BaiduFanyi: {
    translate(opts: Options): Promise<TranslateResult>;
  };
}
