interface Options {
  q: string | string[];
  from: string;
  to: string | string[];
  appid?: string;
  secret?: string;
  delay?: number;
}

interface TranslateResult {
  error_code?: string;
  error_msg?: string;
  from: string;
  to: string;
  trans_result: {
    src: string;
    dst: string;
  }[];
}

interface NxStatic {
  BaiduFanyi: {
    translate(opts: Options): Promise<TranslateResult>
  };
}
