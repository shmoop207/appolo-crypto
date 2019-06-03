
import {createHash, HexBase64Latin1Encoding} from "crypto";

export class Hash {

    public static hash(value: string, algorithm: string = 'sha1', encoding: HexBase64Latin1Encoding = 'hex'): string {
        return createHash(algorithm).update(value).digest(encoding);
    }

    public static md5(value):string{
        return Hash.hash(value,"md5","hex")
    }

    public static hashCode(s: string,prefix:string = "_"): string {
        let h = 0, l = s.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return prefix + h;
    }
}
