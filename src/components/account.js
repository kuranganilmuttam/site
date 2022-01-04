import * as React from "react"

const AccountDetails = () => {
    return (
        <div class="pt-5 grid grid-cols-1">
            <div></div>
            <div >
                <div class="font-semibold pb-3">
                    A/c No: 311622010000481 <br />
                    Name: K. M NATARAJAN <br />
                    IFSC CODE: UBIN0931161 <br />
                </div>
                BANK NAME: UNION BANK OF INDIA <br />
                BRANCH: DUSI BRANCH <br />
                <p class="pt-2">
                    Other join account holders:
                    <ul>
                        <li>E. PUGAZHENDI</li>
                        <li>K. PANNEERASELVAM</li>
                        <li>S. ELUMALAI</li>
                    </ul>
                </p>
            </div>
            <div></div>
        </div>
    )
}

export default AccountDetails