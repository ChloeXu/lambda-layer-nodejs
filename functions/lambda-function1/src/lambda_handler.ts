import * as request from "request";

export function send_message(event: any, context: any, callback: any) {
    const url = 'https://hooks.slack.com/services/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';
    console.log("SLACK URL: ", url);
    const payload = {
        icon_emoji: ":ghost:",
        username: "chloe",
        text: "test layers",
        channel: "@chloexu"
    }
    const options = {
        method: "POST",
        url: url,
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    };
    console.log("SLACK PAYLOAD: ", payload);

    request(options, (error: any, body: any) => {
        if (!error) {
            callback(undefined, body);
        } else {
            console.error("Slack request has error in response: ", error);
            callback(error, undefined);
        }
    });
}
