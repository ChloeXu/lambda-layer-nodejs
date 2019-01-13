import { send_message } from "./lambda_handler";

send_message("", "", (err: any, data: any) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
})