import { Hanko, register } from "@teamhanko/hanko-elements";
import { en } from "@teamhanko/hanko-elements/i18n/en";
export const HankoApiUrl = import.meta.env.VITE_HANKO_API_URL;

const _Hanko = {
  hankoInstance: () => new Hanko(HankoApiUrl),
  en: en,
  register: register,
};

export default _Hanko;
