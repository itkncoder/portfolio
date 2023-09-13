import { useState } from "react"
import { github, telegram } from "../../assets"
import axios from "axios"

const Footer = () => {

    const [from, setFrom] = useState("")
    const [message, setMessage] = useState("")

    const onSend = async () => {
        if(from && message) {
            const TOKEN = '5980270602:AAG-3c8dFWiy6_lWwgSAQSYitJF-3T1nyXc'
            const CHAT_ID = '-1001814016840'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let msg = `<b>-------------</b>\n`
            msg += `<b>${from}</b>\n`
            msg += `<b>${message}</b>`
            

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }, setFrom(''), setMessage('')).then(() => {
                document.getElementById('my_modal_2').close()
            })
        }
    }

    return (
        <div className="px-[25px] h-[55px] border-t border-[#1E2D3D] flex items-center justify-between">
            <div className="flex justify-center items-center gap-[20px]">
                <h2 className="text-[#607B96] font-[450]">find me in:</h2>
                <div className="flex items-center justify-center">
                    <a href="https://github.com/itkncoder" target="_blank" className="text-[#607B96] border-l border-[#1E2D3D] h-[55px] flex items-center px-[20px]">
                        <img src={github} className="w-[20px]" alt="github"/>
                    </a>
                    <a href="https://t.me/itkncoder" target="_blank" className="text-[#607B96] border-x border-[#1E2D3D] h-[55px] flex items-center px-[20px]">
                        <img src={telegram} className="w-[20px]" alt="telegram"/>
                    </a>
                </div>
            </div>
            <div className="h-[55px] flex items-center border-[#1E2D3D] border-l">
                <p onClick={() => document.getElementById('my_modal_2').showModal()} className="text-[#607B96] cursor-pointer flex items-center pl-[20px] font-[450]">contact me
                    <i class="fa-solid fa-address-book ml-2 "></i>
                </p>
            </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box border border-[#1E2D3D] max-w-md bg-[#011627]">
                    <h3 className="font-bold text-lg">Contact me!</h3>
                    <input value={from} onChange={e => setFrom(e.target.value)} type="text" placeholder="From..." className="input bg-[#011627] mt-5 input-bordered w-full h-10" />
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="textarea bg-[#011627] textarea-bordered w-full mt-3" placeholder="Message..."></textarea>
                    <div className="flex w-full justify-end mt-3">
                        <button onClick={onSend} className="btn btn-active btn-ghost">Send by telegram</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default Footer