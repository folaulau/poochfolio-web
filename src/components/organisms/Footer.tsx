import { faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <div className="bg-primary-300">
      <div className="container flex items-center justify-between h-9 text-10">
        <div className="flex gap-11">
          <div>Pooch Technologies Inc</div>
          <div>Poochfolio © TM</div>
        </div>
        <div className="flex items-center gap-11">
          <div className="flex items-center gap-6 text-gray-575">
            <FontAwesomeIcon icon={faInstagram} fontSize={18} />
            <FontAwesomeIcon icon={faYoutube} fontSize={18} />

            <FontAwesomeIcon icon={faLinkedin} fontSize={18} />
          </div>

          <div className="flex gap-3">
            <div>Privacy Policy</div>|<div>Terms of Use</div>
          </div>
        </div>
      </div>
    </div>
  )
}
