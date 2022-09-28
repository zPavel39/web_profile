import React from 'react'

export const CodePage = () => {
    return (
        <div>
            <div className="main__code-example">
                <h2 className="code__item-title _item-title">Code example</h2>
                <pre className="code-example">
                    {function removeChar(str) {
                        if (str.length > 1) {
                            return str.slice(1, str.length - 1)
                        } else {
                            return str
                        }
                    }}
                </pre>
            </div>
        </div>
    )
}
