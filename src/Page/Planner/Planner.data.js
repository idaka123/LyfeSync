import { Img } from "../../Assets/svg";

export const plannerData = {
    task: {
        name: "task",
        dateZone: [
            {
                name: "today",
                value: "Nay"
            },
            {
                name: "week",
                value: "Tuần"
            },
            {
                name: "all",
                value: "Tất cả"
            }
        ],
        empty:{
            img: Img.task,
            text1: "Biến sự hỗn loạn thành trật tự.",
            text2: "Tập trung năng lượng của bạn vào những điều đúng đắn. Bạn không thể làm mọi thứ ngày hôm nay, nhưng bạn có thể làm được điều gì đó.",
            text3: "Bạn có thể thực hiện hành động nào hôm nay để đưa bạn đến gần hơn với mục tiêu của mình?",
        }
    },
    routine: {
        name: "routine",
        dateZone: [
            {
                name: "today",
                value: "Nay"
            },
            {
                name: "all",
                value: "Tất cả"
            }
        ],
        empty:{
            img: Img.routine,
            text1: "Thực hiện một sự thay đổi thực sự.",
            text2: "Hãy thực hiện một hành động nhỏ và nhất quán mỗi ngày và xem bạn có thể tạo ra tác động to lớn như thế nào.",
            text3: "Hoạt động nhỏ và hữu ích nào bạn sẽ thực hiện thường xuyên để trở thành người giỏi nhất?",
        }
    },
    goal: {
        name: "goal",
        dateZone: [
            {
                name: "all",
                value: "Tất cả"
            }
        ],
        empty:{
            img: Img.goal,
            text1: "Theo dõi sự tiến bộ của bạn.",
            text2: "Biến những giấc mơ vô hình của bạn thành những giấc mơ hữu hình. Viết ra một kế hoạch hướng tới ước mơ của bạn và biến chúng thành hành động.",
            text3: "Mục tiêu hàng tháng hoặc hàng quý nào sẽ khiến bạn nhảy ra khỏi giường vào buổi sáng?",
        }
    }
}