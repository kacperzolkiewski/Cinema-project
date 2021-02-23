type ReportMsgType = string

class ErrorReporting {
    report(msg: ReportMsgType): void {
        throw new Error("Not implemented")
    }
}

export default ErrorReporting
