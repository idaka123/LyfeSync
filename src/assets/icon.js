import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters, AiFillTag, AiOutlineUserAdd, AiOutlineGooglePlus } from 'react-icons/ai'
import { MdSecurity, MdOutlineAdminPanelSettings, MdNotificationsNone, MdDelete } from 'react-icons/md'
import { FiUser, FiSettings, FiMenu } from 'react-icons/fi'
import { SlOptionsVertical } from 'react-icons/sl'
import { IoIosArrowDown } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import { VscSearch } from 'react-icons/vsc'
import { BsCart2, BsPlay, BsListTask, BsCardImage } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiMessageAltDetail, BiHomeAlt2 } from 'react-icons/bi'
import { ImPlus } from 'react-icons/im'
import { SiGumtree } from 'react-icons/si'
import { CiPause1 } from 'react-icons/ci'
import { RiCloseFill, RiDeleteBinLine } from 'react-icons/ri'
import { GrUploadOption } from 'react-icons/gr'

   

export const Icon = {
    passHide: AiFillEyeInvisible,
    passUnHide: AiFillEye,
    managerRole: MdSecurity,
    adminRole: MdOutlineAdminPanelSettings,
    userRole: FiUser,
    addUer: AiOutlineUserAdd,
    option: SlOptionsVertical,
    arrowDown: IoIosArrowDown,
    google: AiOutlineGooglePlus,
    facebook: FaFacebookF,
    search: VscSearch,
    cart: BsCart2,
    wishList: BsHeart,
    arrowDown2: MdKeyboardArrowDown,
    loading: AiOutlineLoading3Quarters,
    notification: MdNotificationsNone,
    message: BiMessageAltDetail,
    delete: MdDelete,
    tag: AiFillTag,
    plus: ImPlus,
    home: BiHomeAlt2,
    tree: SiGumtree,
    setting: FiSettings,
    menu: FiMenu,
    x: RiCloseFill,
    Playy: BsPlay,
    pause: CiPause1,
    task: BsListTask,
    background: BsCardImage,
    bin: RiDeleteBinLine,
    upload: GrUploadOption
}