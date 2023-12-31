
import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets/photos";
import random from "./utils/random";
export const quotesData = [
  {
    id: 1,
    content: "Cuộc sống là một hành trình, không phải là điểm đến. Hãy đón nhận mỗi khoảnh khắc và mỗi thử thách.",
    author: "Anh Tú"
  },
  {
    id: 2,
    content: "Vẻ đẹp của cuộc sống không nằm ở độ dài, mà ở những câu chuyện chúng ta viết với nó.",
    author: "Hồng Anh"
  },
  {
    id: 3,
    content: "Cuộc sống là bức tranh và những hành động của chúng ta là những nét vẽ. Hãy vẽ một bức tranh tuyệt đẹp.",
    author: "Quốc Bảo"
  },
  {
    id: 4,
    content: "Những thử thách trong cuộc sống giống như các cấp độ trong một trò chơi. Chinh phục một để chuyển sang cái tiếp theo.",
    author: "Ngọc Lan"
  },
  {
    id: 5,
    content: "Mỗi quyết định chúng ta đưa ra đưa chúng ta đến một con đường khác nhau. Hãy chọn lựa một cách khéo léo.",
    author: "Việt Dũng"
  },
  {
    id: 6,
    content: "Thời gian là đồng tiền của cuộc sống. Hãy tiêu nó cho những gì thực sự quan trọng.",
    author: "Thanh Hà"
  },
  {
    id: 7,
    content: "Trong trò chơi của cuộc sống, không phải về việc thắng hoặc thua, mà là chơi bằng trái tim.",
    author: "Đình Phúc"
  },
  {
    id: 8,
    content: "Những khoảnh khắc tốt nhất trong cuộc sống là những gì chúng ta không lên kế hoạch, nhưng lại trân trọng mãi mãi.",
    author: "Thùy Linh"
  },
  {
    id: 9,
    content: "Cuộc sống không phải về việc sưu tập đồ vật, mà là sưu tập kỷ niệm.",
    author: "Minh Tuấn"
  },
  {
    id: 10,
    content: "Trong câu chuyện lớn của cuộc sống, hãy chắc chắn bạn có một vai trò đáng để đóng.",
    author: "Phương Thảo"
  },
  {
    id: 11,
    content: "Mỗi thử thách chúng ta đối mặt là một cơ hội để nâng cao trong trò chơi của cuộc sống.",
    author: "Văn Phong"
  },
  {
    id: 12,
    content: "Như trong trò chơi, trong cuộc sống, không phải về điểm số cao nhưng là về trải nghiệm.",
    author: "Thuỳ Dương"
  },
  {
    id: 13,
    content: "Những thành tựu của cuộc sống không phải về những giải thưởng, nhưng về những bài học học được trên đường đi.",
    author: "Nhật Minh"
  },
  {
    id: 14,
    content: "Trong hành trình của cuộc sống, không phải về điểm đến nhưng là về những người bạn chọn.",
    author: "Bảo Trâm"
  },
  {
    id: 15,
    content: "Mỗi kết thúc trong cuộc sống là một bắt đầu mới. Đón nhận sự thay đổi.",
    author: "Đức Anh"
  },
  {
    id: 16,
    content: "Trong trò chơi của cuộc sống, mỗi người chơi có một câu chuyện độc đáo để kể. Hãy làm cho câu chuyện của bạn đáng nhớ.",
    author: "Mai Phương"
  },
  {
    id: 17,
    content: "Cuộc sống mang lại vô số khả năng, giống như một trò chơi thế giới mở.",
    author: "Hữu Long"
  },
  {
    id: 18,
    content: "Cuộc sống, giống như một trò chơi, được trải nghiệm tốt nhất với bạn bè và người thân yêu.",
    author: "Xuân Quỳnh"
  },
  {
    id: 19,
    content: "Mỗi thất bại trong cuộc sống là một sự sắp đặt cho một sự quay trở lại lớn hơn. Tiếp tục chơi.",
    author: "Tấn Phát"
  },
  {
    id: 20,
    content: "Cuộc sống không có nút tạm dừng. Trân trọng mỗi khoảnh khắc.",
    author: "Thúy Nga"
  },
  //... I'll continue the same pattern for the remaining data
  {
    id: 21,
    content: "Cuộc sống là một hành trình, không phải là điểm đến. Hãy đón nhận mỗi khoảnh khắc và mỗi thử thách.",
    author: "Đăng Khoa"
  },
  {
    id: 22,
    content: "Vẻ đẹp của cuộc sống không nằm ở độ dài, mà ở những câu chuyện chúng ta viết với nó.",
    author: "Anh Thư"
  },
  {
    id: 23,
    content: "Cuộc sống là bức tranh và những hành động của chúng ta là những nét vẽ. Hãy vẽ một bức tranh tuyệt đẹp.",
    author: "Trí Đức"
  },
  {
    id: 24,
    content: "Những thử thách trong cuộc sống giống như các cấp độ trong một trò chơi. Chinh phục một để chuyển sang cái tiếp theo.",
    author: "Hạnh Nhi"
  },
  {
    id: 25,
    content: "Mỗi quyết định chúng ta đưa ra đưa chúng ta đến một con đường khác nhau. Hãy chọn lựa một cách khéo léo.",
    author: "Thành Đạt"
  },
  {
    id: 26,
    content: "Thời gian là đồng tiền của cuộc sống. Hãy tiêu nó cho những gì thực sự quan trọng.",
    author: "Tú Anh"
  },
  {
    id: 27,
    content: "Trong trò chơi của cuộc sống, không phải về việc thắng hoặc thua, mà là chơi bằng trái tim.",
    author: "Văn Thọ"
  },
  {
    id: 28,
    content: "Những khoảnh khắc tốt nhất trong cuộc sống là những gì chúng ta không lên kế hoạch, nhưng lại trân trọng mãi mãi.",
    author: "Trúc Mai"
  },
  {
    id: 29,
    content: "Cuộc sống không phải về việc sưu tập đồ vật, mà là sưu tập kỷ niệm.",
    author: "Công Vinh"
  },
  {
    id: 30,
    content: "Trong câu chuyện lớn của cuộc sống, hãy chắc chắn bạn có một vai trò đáng để đóng.",
    author: "Mỹ Dung"
  },
  {
    id: 31,
    content: "Mỗi thử thách chúng ta đối mặt là một cơ hội để nâng cao trong trò chơi của cuộc sống.",
    author: "Văn Phát"
  },
  {
    id: 32,
    content: "Như trong trò chơi, trong cuộc sống, không phải về điểm số cao nhưng là về trải nghiệm.",
    author: "Thu Trang"
  },
  {
    id: 33,
    content: "Những thành tựu của cuộc sống không phải về những giải thưởng, nhưng về những bài học học được trên đường đi.",
    author: "Phúc Minh"
  },
  {
    id: 34,
    content: "Trong hành trình của cuộc sống, không phải về điểm đến nhưng là về những người bạn chọn.",
    author: "Bảo Ly"
  },
  {
    id: 35,
    content: "Mỗi kết thúc trong cuộc sống là một bắt đầu mới. Đón nhận sự thay đổi.",
    author: "Đình Khôi"
  },
  {
    id: 36,
    content: "Trong trò chơi của cuộc sống, mỗi người chơi có một câu chuyện độc đáo để kể. Hãy làm cho câu chuyện của bạn đáng nhớ.",
    author: "Nhật Hà"
  },
  {
    id: 37,
    content: "Cuộc sống mang lại vô số khả năng, giống như một trò chơi thế giới mở.",
    author: "Phúc An"
  },
  {
    id: 38,
    content: "Cuộc sống, giống như một trò chơi, được trải nghiệm tốt nhất với bạn bè và người thân yêu.",
    author: "Kim Oanh"
  },
  {
    id: 39,
    content: "Mỗi thất bại trong cuộc sống là một sự sắp đặt cho một sự quay trở lại lớn hơn. Tiếp tục chơi.",
    author: "Quang Huy"
  },
  {
    id: 40,
    content: "Cuộc sống không có nút tạm dừng. Trân trọng mỗi khoảnh khắc.",
    author: "Hồng Nhung"
  },
];



export const tipsData = [
  {
    id: 1,
    title: "Loại bỏ thói quen xấu",
    content: "Ngoài việc bắt đầu thói quen tốt, hãy cố gắng loại bỏ một thói quen xấu. Chắc chắn bạn có một thói quen không lành mạnh hoặc bất kỳ điều gì khác không phục vụ bạn. Những thói quen hàng ngày có thể giúp bạn theo dõi cách bạn tránh thói quen xấu này. ",
    img: img1
  },
  {
    id: 2,
    title: "Phát triển tư duy mở rộng",
    content: "Đối mặt với thách thức và xem sự thất bại như cơ hội để học hỏi và phát triển. Tư duy mở rộng cho phép bạn đạt đến tiềm năng tối đa của mình.",
    img: img2
  },
  {
    id: 3,
    title: "Thực hành lòng biết ơn",
    content: "Dành một khoảnh khắc mỗi ngày để suy ngẫm về những điều mà bạn cảm ơn. Điều này có thể cải thiện sự an lạc tinh thần và hạnh phúc tổng thể của bạn.",
    img: img3
  },
  {
    id: 4,
    title: "Đặt ra mục tiêu rõ ràng",
    content: "Xác định mục tiêu cụ thể, khả thi cho bản thân. Điều này giúp bạn có hướng và mục đích trong các nỗ lực của mình.",
    img: img4
  },
  {
    id: 5,
    title: "Ưu tiên việc chăm sóc bản thân",
    content: "Biến việc chăm sóc bản thân thành một phần không thể thỏa hiệp của lịch trình của bạn. Chăm sóc sức khoẻ vật lý, tinh thần và tinh thần của bạn là rất quan trọng.",
    img: img5
  },
  {
    id: 6,
    title: "Tạo ra các mối quan hệ ý nghĩa",
    content: "Dành thời gian và nỗ lực để xây dựng và duy trì các mối quan hệ chân thành với người khác. Những mối quan hệ ý nghĩa làm phong phú thêm cuộc sống của bạn.",
    img: img6
  },
  {
    id: 7,
    title: "Luôn tò mò và mở lòng",
    content: "Giữ tâm hồn tò mò và sẵn lòng khám phá ý tưởng và quan điểm mới. Điều này thúc đẩy sự sáng tạo và sự phát triển cá nhân.",
    img: img7
  }
]


export const wisdomsData = [
  {
    id: 1,
    content: "„Để thấy được cầu vồng, bạn phải biết chịu đựng những cơn mưa.“",
    author: "Nhạc sĩ Trịnh Công Sơn"
  },
  {
    id: 2,
    content: "„Nghĩa làm trái tim, tri thức làm đầu óc.“",
    author: "Tướng Phạm Ngũ Lão"
  },
  {
    id: 3,
    content: "„Khó khăn chỉ là bước đệm tới thành công.“",
    author: "Chủ tịch Hồ Chí Minh"
  },
  {
    id: 4,
    content: "„Tự do không phải là làm những gì bạn muốn mà là muốn những gì bạn làm.“",
    author: "Đại tướng Võ Nguyên Giáp"
  },
  {
    id: 5,
    content: "„Trí tuệ không nằm ở kiến thức, mà nằm ở khả năng áp dụng kiến thức.“",
    author: "Nhà thơ Nguyễn Du"
  },
  {
    id: 6,
    content: "„Đường dài mới biết ngựa hay, việc lớn mới biết người tài.“",
    author: "Dân gian Việt Nam"
  },
  {
    id: 7,
    content: "„Người không có mục tiêu sống như thuyền không có lái.“",
    author: "Nhà cách mạng Phan Bội Châu"
  },
  {
    id: 8,
    content: "„Dưới bầu trời rộng lớn, con người ta luôn tìm kiếm mục đích của mình.“",
    author: "Nhà thơ Xuân Diệu"
  },
  {
    id: 9,
    content: "„Không có gì quý hơn độc lập tự do.“",
    author: "Chủ tịch Hồ Chí Minh"
  },
  {
    id: 10,
    content: "„Người Việt Nam không ngại khó khăn, chỉ sợ không có đường đi.“",
    author: " Nhà cách mạng Lý Tự Trọng"
  },
  {
    id: 11,
    content: "„Đi một ngày đàng, học một sàng khôn.“",
    author: "Dân gian Việt Nam"
  },
  {
    id: 12,
    content: "„Thành công thật sự là sự hài lòng với những gì bạn đã làm và đạt được.“",
    author: "Nhà thơ Nguyễn Trãi"
  },
  {
    id: 13,
    content: "„Cuộc sống là sự lựa chọn, và mỗi lựa chọn đều có giá của nó.“",
    author: "Nhà thơ Nguyễn Du"
  },
  {
    id: 14,
    content: "„Làm người phải tự tin, nhưng không được kiêu căng.“",
    author: "Nhà triết học Phan Khôi"
  }
]

export const podcastsType = [
  {
    id: 1,
    title: "Tất cả",
  },
  {
    id: 2,
    title: "Yêu thích",
  },
  {
    id: 3,
    title: "Giáo dục",
  },
  {
    id: 4,
    title: "Giải trí",
  },
  {
    id: 5,
    title: "Thể thao"
  }
]

export const podcastsArrangeData = [
  {
    id: 1,
    title: "Alphabet"
  },
  {
    id: 2,
    title: "Author"
  },
  {
    id: 3,
    title: "Length"
  },
]

export const podcastsData = [
  {
    id: 1,
    title: "THẺ TÍN DỤNG đã ra đời như thế nào? | Thành Long | Tiền tài",
    url: "https://www.youtube.com/watch?v=Jq-v7Cv_cXc",
    thumbnail: "https://i.scdn.co/image/ab6765630000ba8ade85c9dd1b09091210558e7f",
    length: "12 min 23 sec",
    author: "Spiderum Podcasts",
    date: "Oct 26 2023",
    type: ["Tất cả", "Giáo dục"],
    description: `Đầu xuân năm 1870, hai vợ chồng Luigi Giovanni và Maria Virginia De Martini đặt chân tới San Jose,
     California sau quãng đường dài gần 10.000 cây số từ ngôi làng nhỏ Acreeto, nước Ý. Chỉ vài tháng sau đó, cậu bé 
     Amadeo Pietro Giannini cất tiếng khóc chào đời vào ngày 6 tháng 5. Cô lẽ Luigi và Maria cùng không ngờ rằng đứa 
     bé đang nằm trong nôi kia, thiên thần nhỏ bé của ông bà, sau này sẽ khai sinh ra ngân hàng lớn nhất nước Mỹ và giúp
      mảnh đất California trở thành một trong những nền kinh tế lớn nhất thế giới. Ngân hàng mà Giannini kiến tạo nên 
      chính là Bank of America (Ngân hàng Hoa Kỳ), và ông đã nắm giữ cương vị Chủ tịch Hội đồng quản trị trong suốt 30 năm 
      cho tới khi nghỉ hưu. Bank of America chính là ngân hàng cho ra mắt thẻ tín dụng đầu tiên trên thế giới với tên gọi 
      BankAmericard, tiền thân của thẻ VISA ngày nay. Thông qua bài viết của tác giả "Thành Long" 
      đã được đăng tải trên Website Spiderum, chúng ta cùng tìm hiểu toàn bộ quá trình hình thành của Visa nhé.
      `,
    downloadUrl: `https://dl233.dlmate21.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ1FzSkFmbGxVQklPNXVoOFlia3NmelpwRnJBT3dyaUsvelZQeDJzQitNWC9mQWRTemQ4OEYzQjFEU3N2ZHU4aTNPdU1zRERZd29CMVBkeXFPQnRIUXZyUTYrY05DSU51NFRUeWN3dDBnbTluZlc3dENSbXpPenZUaU85QWlpUEN0QitROERlTmFEdEw0WTIyR0FRL2pxMU50T21TL2F4OHNNK05MWTdGRDRpS1o3bTQ4d2Z4UjlQWjFOaXR6ejF2ekptbGNZbEpGQm54K0NzTzJ6RW9zM0dlRE1YenBnYldkYno3YXFEajAwM21nSXIwK295YXdkN1M0RVlmTXo3WHFrOE9Ec2NqYVZlNStuR2NqY2M3bms5NUtxcE9wb3BVU2MvN0tYeXM0WXhVNjBYcFg3UklZPQ%3D%3D`,
    playlist: ["Playlist 1", "Playlist 2", "Playlist 3", "Playlist 4", "Playlist 5"],
  },
  {
    id: 2,
    title: "10 lời nhắn nhủ đến chính mình của 10 năm trước khi còn là sinh viên (Phần 1)",
    url: "https://www.youtube.com/watch?v=f8NHXvf4ms0&list=PLK7-xrxcFKGrOQJuqlMTZhkeKH25LiICB&index=8",
    thumbnail: "https://i.ytimg.com/vi/f8NHXvf4ms0/maxresdefault.jpg",
    length: "1 hour 30 min 24 sec",
    author: "The Hanoi Chamomil",
    type: ["Tất cả", "Giải trí"],
    description: 0,
    playlist: ["Playlist 6", "Playlist 7", "Playlist 8", "Playlist 9", "Playlist 10"],
  },
  {
    id: 3,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 1", "Playlist 2", "Playlist 3", "Playlist 5", "Playlist 6"],
  },
  {
    id: 4,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 4", "Playlist 7", "Playlist 8", "Playlist 9", "Playlist 10"],
  },
  {
    id: 5,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 1", "Playlist 3", "Playlist 5", "Playlist 7", "Playlist 9"],
  },
  {
    id: 6,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 2", "Playlist 4", "Playlist 6", "Playlist 8", "Playlist 10"],
  },
  {
    id: 7,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 3", "Playlist 5", "Playlist 7", "Playlist 8", "Playlist 10"],
  },
  {
    id: 8,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 3", "Playlist 5", "Playlist 7", "Playlist 8", "Playlist 10"],
  },
  {
    id: 9,
    title: "\"CHIẾN BINH CẦU VỒNG\": Những điều bạn đã KHÔNG NHẬN RA khi đọc cuốn sách",
    url: "https://www.youtube.com/watch?v=hSfvJ0amEqQ",
    thumbnail: "https://i.scdn.co/image/ab6765630000f68dfc4a0e306c8a04ec6e990a4b",
    length: "12 min 23 sec",
    author: "Spiderum Books",
    type: ["Tất cả", "Giáo dục"],
    description: 0,
    playlist: ["Playlist 1", "Playlist 4", "Playlist 5", "Playlist 6", "Playlist 7"],
  },
]

export const playlistsDataByLS = [
  {
    id: 1,
    name: `Made for you`,
    image: "https://natalieschumann.files.wordpress.com/2020/09/screen-shot-2020-09-14-at-9.47.14-am.png",
    number: random(25, 50),
    description: " Một danh sách chọn lựa podcast dành riêng cho bạn, nơi mỗi bản nhạc được tuyển chọn theo phong cách của bạn.",
    color: "#cedf77, #000000"
  },
  {
    id: 2,
    name: `Daily mix`,
    image: "https://yt3.googleusercontent.com/ytc/AOPolaSZQhaCmdTw47JKixwHpUZgEZ4lUm6YS-nbxxHXaA=s900-c-k-c0x00ffffff-no-rj",
    number: random(25, 50),
    description: `Tận hưởng một danh sách phối hợp hàng ngày được cá nhân hóa, cung cấp một loạt các podcast phong phú giúp bạn cập nhật thông tin, mở mang kiến thức và giải trí. Với 100 tập được lựa chọn kỹ càng, mỗi ngày bạn sẽ được thưởng thức những câu chuyện, bài học và tiếng cười mới, phù hợp với gu thưởng thức đa dạng của mình. Dù bạn đang tìm kiếm cảm hứng, giải trí hay muốn tìm hiểu sâu hơn về một chủ đề nào đó, "Daily Mix" sẽ là người bạn đồng hành không thể thiếu trong ngày mới của bạn.`,
    color: "#d3c0b2, #1c1f26"
  },
  {
    id: 3,
    name: `"In my feels"`,
    image: "https://3.bp.blogspot.com/-jNqt8TZRhVo/WXIL9SDsZFI/AAAAAAAAUoE/dq_wsyeAQlg_mRZSeA2ZtYIwxW2vdPDXQCKgBGAs/s1600/IMG_0084.JPG",
    number: random(25, 50),
    description: `
    Chìm đắm vào thế giới của cảm xúc với playlist 'In my feels'. Đây là nơi chứa đựng những podcast làm rung động trái tim bạn, từ những câu chuyện tình yêu đẹp đến những bản nhạc buồn, từ những bài thơ chạm đến tâm hồn đến những cuộc trò chuyện chân thành về các khía cạnh sâu sắc của cuộc sống. Mỗi tập sẽ là một hành trình khám phá nội tâm, một không gian để bạn cảm nhận, suy ngẫm và tìm thấy sự đồng cảm. Hãy để 'In my feels' đồng hành cùng bạn trong những khoảnh khắc yên bình hoặc khi bạn cần một người bạn đồng cảm.
    `,
    color: "#ff5733, #00a6a6"
  },
  {
    id: 4,
    name: "Soulful Escapes",
    image: "https://i.pinimg.com/736x/b0/1b/ff/b01bffa201e78c0f1c65a9925a496e8b.jpg",
    number: random(25, 50),
    description: `Khám phá hành trình của cảm xúc qua âm nhạc với playlist "Soulful Escapes". Mỗi bản nhạc được chọn lựa cẩn thận để nâng niu trái tim và tâm hồn bạn, từ giai điệu nhẹ nhàng cho đến những ca khúc sâu lắng, tất cả đều hòa quyện để tạo nên khoảnh khắc thư giãn tuyệt vời.`,
    color: "#242c3b, #d87144"
  },
  {
    id: 5,
    name: `Discover daily`,
    image: "https://i.pinimg.com/originals/f3/72/1b/f3721b282fa7009f1abf9d9abe9c3dff.png",
    number: random(25, 50),
    description: `Khám phá một thế giới tri thức mới mỗi ngày với "Discover Daily". Từ sự kiện thời sự quốc tế, câu chuyện văn hóa địa phương, triết lý sống, cho đến những bí ẩn khoa học - playlist này đem đến cái nhìn toàn diện, sâu rộng qua lăng kính của những người kể chuyện và chuyên gia hàng đầu.`,
    color: "#9a2628, #363636"
  },
  {
    id: 6,
    name: `Horizon Expanders`,
    image: "https://i.pinimg.com/originals/60/8b/77/608b7725a06433fd6dea6c1777e13a0c.png",
    number: random(25, 50),
    description: `Mở rộng tầm nhìn và trí tuệ của bạn với "Horizon Expanders". Tập hợp những cuộc đối thoại, bài giảng, và thảo luận đa dạng từ mọi lĩnh vực như kinh doanh, nghệ thuật, khoa học, và sức khỏe, playlist này sẽ trở thành nguồn cảm hứng không ngừng cho đam mê và sự hiểu biết của bạn.`,
    color: "#74624b, #6b707e"
  },
  {
    id: 7,
    name: `Insight Hour`,
    image: "https://i.pinimg.com/originals/39/4b/bd/394bbdcdffaf656bbd986ef48c434c8d.png",
    number: random(25, 50),
    description: `"Insight Hour" là nơi gặp gỡ của những ý tưởng đột phá và những cuộc trò chuyện sâu sắc. Mỗi tập sẽ đưa bạn đi từ sự am hiểu về tự phát triển đến những khám phá khoa học mới nhất, giúp bạn mở mang đầu óc và trái tim.`,
    color: "#f5e2ed, #000000"
  },
  {
    id: 8,
    name: `Innovate & Inspire`,
    image: "https://i.pinimg.com/originals/6a/a6/90/6aa690b048e7e0c22228be0a361ddb90.png",
    number: random(25, 50),
    description: `Đắm chìm trong thế giới của sự sáng tạo và cảm hứng với "Innovate & Inspire". Các tập trong playlist này sẽ nói về những đổi mới đang thay đổi ngành công nghiệp, các phát minh mới và những người tiên phong đang vẽ nên tương lai.`,
    color: "#e6c5bc , #193448"
  },
  {
    id: 9,
    name: `Mind & Body Talks`,
    image: "https://i.pinimg.com/originals/4a/c1/32/4ac132e384be17db171aea4480f24c52.png",
    number: random(25, 50),
    description: `"Mind & Body Talks" là sự kết hợp giữa khoa học, triết lý và thực hành tốt nhất cho tinh thần và thể chất. Tìm hiểu các phương pháp mới để chăm sóc bản thân qua một loạt các bài thảo luận và hướng dẫn từ các chuyên gia.`,
    color: "#f9fbfb, #586138"
  },
  {
    id: 10,
    name: `Cultural Digest`,
    image: "https://i.pinimg.com/originals/3e/f9/a9/3ef9a9d7fbec9e1c48f90058f98eccbf.png",
    number: random(25, 50),
    description: ` "Cultural Digest" đem đến cho bạn một cái nhìn toàn diện về những phát triển nổi bật trong lĩnh vực văn hóa, từ nghệ thuật, âm nhạc, đến lịch sử và nhiều hơn nữa. Cùng khám phá và trân trọng những điều làm nên sự phong phú của nhân loại.`,
    color: "#f5f5f5,#000000"
  },
];


export const playlistsData = [
  {
    id: 1,
    name: `Playlist 1`,
    image: "https://i.scdn.co/image/ab67656300005f1f906fcd6180adf7988cda3481",
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 2,
    name: `Playlist 2`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 3,
    name: `Playlist 3`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 4,
    name: `Playlist 4`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 5,
    name: `Playlist 5`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 6,
    name: `Playlist 6`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 7,
    name: `Playlist 7`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 8,
    name: `Playlist 8`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 9,
    name: `Playlist 9`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  },
  {
    id: 10,
    name: `Playlist 10`,
    description: "Chào mừng đến với không gian Podcast của bạn! Playlist này chờ đợi để được lấp đầy bởi những chương trình podcast thú vị mà bạn chọn lựa. Từ hội thoại sâu sắc, phân tích chuyên sâu đến câu chuyện giải trí, tạo nên một bộ sưu tập đa dạng mà bạn có thể thưởng thức bất cứ lúc nào. Hãy bắt đầu khám phá và tự do thêm vào những series và tập podcast yêu thích để không bao giờ lỡ mất một khoảnh khắc nào!"
  }
];
