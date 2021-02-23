import ErrorReporting from "./ErrorReporting"

type ReportMsgType = string

export default class ConsoleReporting extends ErrorReporting {
    report(error?: ReportMsgType | Record<string, unknown>): void {
        console.error(error)
    }
}
