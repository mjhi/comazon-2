export const USERS = [
  {
    id: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
    email: 'honggd@example.com',
    firstName: '길동',
    lastName: '홍',
    address: '서울특별시 강남구 무실로 123번길 45-6',
    createdAt: '2023-07-16T09:00:00Z',
    updatedAt: '2023-07-16T09:00:00Z',
  },
  {
    id: '6c3a18b0-11c5-4d97-9019-9ebe3c4d1317',
    email: 'kimyh@example.com',
    firstName: '영희',
    lastName: '김',
    address: '경기도 고양시 봉명로 789번길 21',
    createdAt: '2023-07-16T09:30:00Z',
    updatedAt: '2023-07-16T09:30:00Z',
    savedProducts: {
      connect: [
        { id: 'f8013040-b076-4dc4-8677-11be9a17162f' },
        { id: 'a4ff201c-48f7-4963-b317-2e9e4e3e43b7' },
        { id: '7f70481b-784d-4b0e-bc3e-f05eefc17951' },
        { id: '4e0d9424-3a16-4a5e-9725-0e9d2f9722b3' },
      ],
    },
  },
  {
    id: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
    email: 'lee.cs@example.com',
    firstName: '철수',
    lastName: '이',
    address: '인천광역시 남구 향교로 567번길 8-2',
    createdAt: '2023-07-16T10:00:00Z',
    updatedAt: '2023-07-16T10:00:00Z',
    savedProducts: {
      connect: [
        { id: '43c62d5b-6e66-4d1c-9f47-14d1a1970fd1' },
        { id: '80e7b377-df80-4410-9a14-622ea3cc58e0' },
        { id: '7f70481b-784d-4b0e-bc3e-f05eefc17951' },
      ],
    },
  },
  {
    id: '70e1e61d-f2ae-4d7d-bf8f-d65eafdb6a45',
    email: 'parkjy@example.com',
    firstName: '지영',
    lastName: '박',
    address: '대전광역시 중구 성남로 432번길 76',
    createdAt: '2023-07-16T10:30:00Z',
    updatedAt: '2023-07-16T10:30:00Z',
  },
  {
    id: '73cb9639-d8b7-4f11-9a62-53f4187f3f11',
    email: 'jungminsoo@example.com',
    firstName: '민수',
    lastName: '정',
    address: '부산광역시 동래구 수림로 987번길 33-7',
    createdAt: '2023-07-16T11:00:00Z',
    updatedAt: '2023-07-16T11:00:00Z',
    savedProducts: {
      connect: [
        { id: 'be13a617-8f0e-4806-82f7-149a6e12f1a7' },
        { id: 'd3f74179-2cb5-4e51-8f3a-57f65c1d4e6e' },
      ],
    },
  },
];

export const USER_PREFERENCES = [
  {
    id: '936f5ea4-6e6c-4e5e-91a3-78f5644e1f9a',
    receiveEmail: true,
    createdAt: '2023-07-16T09:00:00Z',
    updatedAt: '2023-07-16T09:00:00Z',
    userId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
  {
    id: 'e1c1e5c1-5312-4f7b-a3d6-4cbb2b4f8828',
    receiveEmail: false,
    createdAt: '2023-07-16T09:30:00Z',
    updatedAt: '2023-07-16T09:30:00Z',
    userId: '6c3a18b0-11c5-4d97-9019-9ebe3c4d1317',
  },
  {
    id: '6c03856e-5b25-4f89-9d20-68a8f8e33c46',
    receiveEmail: true,
    createdAt: '2023-07-16T10:00:00Z',
    updatedAt: '2023-07-16T10:00:00Z',
    userId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: '88d9c8c4-bf9d-4a40-a60a-82dc23e009b0',
    receiveEmail: false,
    createdAt: '2023-07-16T10:30:00Z',
    updatedAt: '2023-07-16T10:30:00Z',
    userId: '70e1e61d-f2ae-4d7d-bf8f-d65eafdb6a45',
  },
  {
    id: '0b5a06cd-5d25-4b3c-bc52-b06ee7b17662',
    receiveEmail: true,
    createdAt: '2023-07-16T11:00:00Z',
    updatedAt: '2023-07-16T11:00:00Z',
    userId: '73cb9639-d8b7-4f11-9a62-53f4187f3f11',
  },
];

export const PRODUCTS = [
  {
    id: 'f8013040-b076-4dc4-8677-11be9a17162f',
    name: '랑방 샤워젤 세트',
    description:
      '랑방의 향기로운 샤워젤 세트입니다. 피부를 부드럽게 케어하며, 향기로운 샤워 시간을 선사합니다.',
    category: 'BEAUTY',
    price: 38000,
    stock: 20,
    createdAt: '2023-07-14T10:00:00Z',
    updatedAt: '2023-07-14T10:00:00Z',
  },
  {
    id: 'd2ff3048-83bc-425a-8ad3-d6d9af1c7c6d',
    name: '나이키 테크조그거팬츠',
    description:
      '나이키의 테크조그거팬츠입니다. 운동이나 일상 생활에서 편안하게 착용할 수 있으며, 스타일과 기능을 모두 갖추고 있습니다.',
    category: 'FASHION',
    price: 75000,
    stock: 15,
    createdAt: '2023-07-14T10:30:00Z',
    updatedAt: '2023-07-14T10:30:00Z',
  },
  {
    id: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
    name: 'Apple AirPods 프로',
    description:
      'Apple의 AirPods 프로는 탁월한 사운드 품질과 노이즈 캔슬링 기능을 갖춘 무선 이어폰입니다. 간편한 터치 컨트롤과 긴 배터리 수명을 제공합니다.',
    category: 'ELECTRONICS',
    price: 320000,
    stock: 10,
    createdAt: '2023-07-14T11:00:00Z',
    updatedAt: '2023-07-14T11:00:00Z',
  },
  {
    id: '4e0d9424-3a16-4a5e-9725-0e9d2f9722b3',
    name: '베르사체 화장품 세트',
    description:
      '베르사체의 화장품 세트로 화려하고 특별한 분위기를 연출할 수 있습니다. 다양한 아이템으로 구성되어 있으며, 고품질 성분을 사용하여 피부에 부드럽고 안정적인 관리를 제공합니다.',
    category: 'BEAUTY',
    price: 65000,
    stock: 8,
    createdAt: '2023-07-14T11:30:00Z',
    updatedAt: '2023-07-14T11:30:00Z',
  },
  {
    id: '39c3fd4a-dbd5-4ab1-8e0b-58ea31b8a2d3',
    name: '아이언맨 골프 클럽 세트',
    description:
      '아이언맨 디자인으로 유명한 골프 클럽 세트입니다. 고품질 소재와 최신 기술로 제작되어 정밀한 스윙과 멋진 샷을 도와줍니다.',
    category: 'SPORTS',
    price: 850000,
    stock: 3,
    createdAt: '2023-07-14T12:00:00Z',
    updatedAt: '2023-07-14T12:00:00Z',
  },
  {
    id: 'c2d4a2e3-7c2a-4f80-bff7-8ebcbacccf2c',
    name: '삼성 갤럭시 S21 울트라 5G 스마트폰',
    description:
      '삼성 갤럭시 S21 울트라 5G 스마트폰은 최신 플래그십 기술을 갖춘 뛰어난 성능을 제공합니다. 화려한 디스플레이, 고화질 카메라, 빠른 프로세서 등으로 사용자들에게 탁월한 사용자 경험을 선사합니다.',
    category: 'ELECTRONICS',
    price: 1249000,
    stock: 8,
    createdAt: '2023-07-14T14:00:00Z',
    updatedAt: '2023-07-14T14:00:00Z',
  },
  {
    id: '43c62d5b-6e66-4d1c-9f47-14d1a1970fd1',
    name: 'LG 그램 14형 노트북',
    description:
      'LG 그램 14형 노트북은 가볍고 휴대성이 뛰어난 디자인과 우수한 성능을 제공합니다. 긴 배터리 수명과 선명한 디스플레이로 사용자들에게 편리한 사용자 경험을 선사합니다.',
    category: 'ELECTRONICS',
    price: 1399000,
    stock: 12,
    createdAt: '2023-07-14T14:30:00Z',
    updatedAt: '2023-07-14T14:30:00Z',
  },
  {
    id: '6e9d4e63-7246-4fc5-bf33-3e7f32fe9c02',
    name: '나이키 에어맥스 270 운동화',
    description:
      '나이키 에어맥스 270 운동화는 경량 디자인과 탁월한 고무 밑창으로 편안한 착용감과 훌륭한 트랙션을 제공합니다. 스포티한 디자인과 풍부한 컬러로 다양한 스타일에 어울립니다.',
    category: 'FASHION',
    price: 169000,
    stock: 10,
    createdAt: '2023-07-14T15:00:00Z',
    updatedAt: '2023-07-14T15:00:00Z',
  },
  {
    id: '80e7b377-df80-4410-9a14-622ea3cc58e0',
    name: '애플 맥북 프로 13형 노트북',
    description:
      '애플 맥북 프로 13형 노트북은 탁월한 성능과 우수한 디스플레이 품질로 유명합니다. 가벼운 무게와 편리한 사용성으로 사용자들에게 탁월한 컴퓨팅 경험을 제공합니다.',
    category: 'ELECTRONICS',
    price: 1999000,
    stock: 10,
    createdAt: '2023-07-14T15:30:00Z',
    updatedAt: '2023-07-14T15:30:00Z',
  },
  {
    id: 'a4ff201c-48f7-4963-b317-2e9e4e3e43b7',
    name: '랑방 매트 틴트',
    description:
      '랑방 매트 틴트는 풍부한 컬러와 지속력을 제공하는 제품입니다. 입술에 부드럽게 발리며 오래 지속되는 매트한 마무리를 선사합니다.',
    category: 'BEAUTY',
    price: 35000,
    stock: 20,
    createdAt: '2023-07-14T16:00:00Z',
    updatedAt: '2023-07-14T16:00:00Z',
  },
  {
    id: 'c6a5975a-42e7-4f7f-8b7c-72714d59f44a',
    name: '루이비통 클래식 지갑',
    description:
      '루이비통의 클래식 지갑은 고품질 가죽과 세련된 디자인으로 제작되었습니다. 실용적인 구성과 품질로 오랜 기간 동안 사용할 수 있습니다.',
    category: 'FASHION',
    price: 750000,
    stock: 15,
    createdAt: '2023-07-14T16:30:00Z',
    updatedAt: '2023-07-14T16:30:00Z',
  },
  {
    id: 'a33d441f-57a9-4618-8f46-07e7418ef3c9',
    name: '아이폰 13 프로 맥스 스마트폰',
    description:
      '아이폰 13 프로 맥스는 탁월한 카메라 성능과 강력한 성능으로 유명한 스마트폰입니다. 선명한 디스플레이와 편리한 사용성을 제공합니다.',
    category: 'ELECTRONICS',
    price: 1799000,
    stock: 5,
    createdAt: '2023-07-14T17:00:00Z',
    updatedAt: '2023-07-14T17:00:00Z',
  },
  {
    id: 'f6c2a70e-32a4-4bcf-b183-8a33d97fb587',
    name: '헤라 UV 미스트 선스틱 SPF50+ PA+++',
    description:
      '헤라의 UV 미스트 선스틱은 SPF50+ PA+++로 강력한 자외선 차단과 함께 피부 보습에 도움을 주는 제품입니다. 휴대하기 편리한 스틱 형태로 사용이 간편합니다.',
    category: 'BEAUTY',
    price: 28000,
    stock: 15,
    createdAt: '2023-07-14T17:30:00Z',
    updatedAt: '2023-07-14T17:30:00Z',
  },
  {
    id: 'e700c4be-6e0c-40fd-bb47-2ab2b2e9270d',
    name: '올리비아 버튼 니트',
    description:
      '올리비아 버튼 니트는 스타일리시한 디자인과 편안한 착용감으로 유명한 제품입니다. 다양한 의상에 매치하기 좋으며, 따뜻한 니트 소재로 겨울철에도 활용할 수 있습니다.',
    category: 'FASHION',
    price: 59000,
    stock: 10,
    createdAt: '2023-07-14T18:00:00Z',
    updatedAt: '2023-07-14T18:00:00Z',
  },
  {
    id: 'be13a617-8f0e-4806-82f7-149a6e12f1a7',
    name: '삼성 55인치 QLED 4K 스마트 TV',
    description:
      '삼성의 55인치 QLED 4K 스마트 TV는 고품질 화질과 풍부한 컬러 표현력으로 몰입감 있는 시청 경험을 제공합니다. 스마트 기능과 음성 인식 기능을 지원하여 편리한 사용자 경험을 선사합니다.',
    category: 'ELECTRONICS',
    price: 1999000,
    stock: 8,
    createdAt: '2023-07-14T18:30:00Z',
    updatedAt: '2023-07-14T18:30:00Z',
  },
  {
    id: 'd3f74179-2cb5-4e51-8f3a-57f65c1d4e6e',
    name: '루이스 카스텔리 미니 프라이팬',
    description:
      '루이스 카스텔리의 미니 프라이팬은 작고 휴대하기 편한 사이즈로 다양한 요리에 활용할 수 있습니다. 내열성과 내마모성이 우수하며 손쉬운 청소가 가능합니다.',
    category: 'KITCHENWARE',
    price: 29000,
    stock: 10,
    createdAt: '2023-07-15T10:00:00Z',
    updatedAt: '2023-07-15T10:00:00Z',
  },
  {
    id: 'dc74c065-5237-4d5b-86d1-d4eeb8a4d1fd',
    name: '델롱기 헤어 드라이어',
    description:
      '델롱기의 헤어 드라이어는 강력한 풍력과 다양한 모드로 빠른 건조와 스타일링을 도와줍니다. 손쉬운 조작과 휴대성을 갖추고 있습니다.',
    category: 'ELECTRONICS',
    price: 69000,
    stock: 15,
    createdAt: '2023-07-15T10:30:00Z',
    updatedAt: '2023-07-15T10:30:00Z',
  },
  {
    id: '93a1c570-ee10-4961-bbdf-68001efddc49',
    name: '보노홈 스탠드 믹서기',
    description:
      '보노홈의 스탠드 믹서기는 강력한 모터와 다양한 속도 조절로 원하는 믹싱과 반죽 작업을 할 수 있습니다. 내구성이 뛰어나며 안정적인 성능을 제공합니다.',
    category: 'KITCHENWARE',
    price: 99000,
    stock: 8,
    createdAt: '2023-07-15T11:00:00Z',
    updatedAt: '2023-07-15T11:00:00Z',
  },
  {
    id: 'd5d60337-ccf6-404f-b615-982f2b223ab3',
    name: '나이키 에어 포스 1 운동화',
    description:
      '나이키의 에어 포스 1 운동화는 클래식한 디자인과 탁월한 편안함으로 유명합니다. 내구성이 우수하며 다양한 스타일과 컬러로 선택할 수 있습니다.',
    category: 'FASHION',
    price: 129000,
    stock: 12,
    createdAt: '2023-07-15T11:30:00Z',
    updatedAt: '2023-07-15T11:30:00Z',
  },
  {
    id: '209b2a1c-c6e9-4461-a17a-c8a8f141f9f9',
    name: '삼성 컬러 레이저 프린터',
    description:
      '삼성의 컬러 레이저 프린터는 고품질 컬러 출력과 빠른 인쇄 속도로 탁월한 인쇄 품질을 제공합니다. 다양한 용지 크기와 고효율 인쇄 기능을 지원합니다.',
    category: 'ELECTRONICS',
    price: 499000,
    stock: 5,
    createdAt: '2023-07-15T12:00:00Z',
    updatedAt: '2023-07-15T12:00:00Z',
  },
  {
    id: 'b1782c1e-8ad2-45a7-90e6-50f61c4a8de9',
    name: '코멧 피크닉 매트',
    description:
      '코멧 피크닉 매트는 내열성과 내충격성이 뛰어나며 편리한 보관과 휴대를 위한 접이식 디자인입니다. 야외 활동에 최적화되어 있습니다.',
    category: 'SPORTS',
    price: 35000,
    stock: 5,
    createdAt: '2023-07-15T12:30:00Z',
    updatedAt: '2023-07-15T12:30:00Z',
  },
  {
    id: 'b2593dbd-5ea3-4376-9378-6d6e7a17e232',
    name: '루미에어 드라이 바디 수건',
    description:
      '루미에어의 드라이 바디 수건은 퀵 드라이와 산뜻한 사용감을 제공하는 혁신적인 수건입니다. 속건성이 뛰어나며 휴대하기 편리합니다.',
    category: 'BEAUTY',
    price: 19900,
    stock: 10,
    createdAt: '2023-07-15T13:00:00Z',
    updatedAt: '2023-07-15T13:00:00Z',
  },
  {
    id: 'c28a2eaf-4d87-4f9f-ae5b-cbcf73e24253',
    name: '쿠진앤에이 오믈렛 팬',
    description:
      '쿠진앤에이의 오믈렛 팬은 오믈렛을 쉽고 빠르게 만들 수 있는 전용 팬입니다. 내열성이 뛰어나며 논스틱 처리로 편리한 사용과 청소가 가능합니다.',
    category: 'KITCHENWARE',
    price: 25000,
    stock: 8,
    createdAt: '2023-07-15T13:30:00Z',
    updatedAt: '2023-07-15T13:30:00Z',
  },
  {
    id: 'e48d9e8b-6712-48ed-9ea2-2f7e150a2e48',
    name: '네스프레소 커피머신',
    description:
      '네스프레소 커피머신은 간편한 사용과 다양한 커피 음료 제공으로 인기 있는 제품입니다. 커피 품질과 편리한 관리 기능을 동시에 갖추고 있습니다.',
    category: 'ELECTRONICS',
    price: 149000,
    stock: 20,
    createdAt: '2023-07-15T14:00:00Z',
    updatedAt: '2023-07-15T14:00:00Z',
  },
  {
    id: '64e7c9fc-49b6-4b20-9ce3-11a9487ed1e1',
    name: '스완스톤 운동 요가 매트',
    description:
      '스완스톤의 운동 요가 매트는 편안하고 안정적인 기준면과 내충격성으로 안전한 운동 활동을 도와줍니다. 내마모성이 우수하며 휴대하기 편리합니다.',
    category: 'SPORTS',
    price: 69000,
    stock: 12,
    createdAt: '2023-07-15T14:30:00Z',
    updatedAt: '2023-07-15T14:30:00Z',
  },
  {
    id: 'e3f34fb9-2c4b-45c0-94b1-610e6cfe13a7',
    name: '샤넬 커버 파운데이션',
    description:
      '샤넬의 커버 파운데이션은 자연스럽게 피부를 커버하고 매끈한 마무리를 선사합니다. 오랜 지속력과 촉촉한 사용감을 제공합니다.',
    category: 'BEAUTY',
    price: 65000,
    stock: 15,
    createdAt: '2023-07-15T15:00:00Z',
    updatedAt: '2023-07-15T15:00:00Z',
  },
  {
    id: '4be1e6fd-2271-4f15-96e3-577c4a057c8b',
    name: '올바로 10단 스텐레스 냄비세트',
    description:
      '올바로의 10단 스텐레스 냄비세트는 내열성과 내식성이 우수한 제품입니다. 다양한 크기와 기능으로 요리를 즐길 수 있습니다.',
    category: 'KITCHENWARE',
    price: 179000,
    stock: 8,
    createdAt: '2023-07-15T15:30:00Z',
    updatedAt: '2023-07-15T15:30:00Z',
  },
  {
    id: 'a4468fc1-3cfc-4c46-9ff9-2469b5f9e88a',
    name: '아디다스 운동바지',
    description:
      '아디다스의 운동바지는 신축성과 편안한 착용감으로 활동성을 높여줍니다. 퀄리티한 소재와 다양한 스타일로 선택의 폭이 넓습니다.',
    category: 'FASHION',
    price: 59000,
    stock: 12,
    createdAt: '2023-07-15T16:00:00Z',
    updatedAt: '2023-07-15T16:00:00Z',
  },
  {
    id: 'be07b27a-93e9-4d1a-8a54-133c0f04541e',
    name: 'LG 울트라 HD 4K TV',
    description:
      'LG의 울트라 HD 4K TV는 생생하고 선명한 화질로 몰입감 있는 시청 경험을 제공합니다. 스마트 기능과 다양한 연결 옵션을 갖추고 있습니다.',
    category: 'ELECTRONICS',
    price: 2299000,
    stock: 5,
    createdAt: '2023-07-15T16:30:00Z',
    updatedAt: '2023-07-15T16:30:00Z',
  },
  {
    id: 'de573676-2a27-4cfa-85a1-0e9dd3ed5315',
    name: '삼성 갤럭시 워치4',
    description:
      '삼성의 갤럭시 워치4는 스타일리시한 디자인과 다양한 기능으로 탁월한 착용 경험을 선사합니다. 편리한 스마트 기능과 건강 관리 기능을 갖추고 있습니다.',
    category: 'ELECTRONICS',
    price: 399000,
    stock: 5,
    createdAt: '2023-07-15T17:00:00Z',
    updatedAt: '2023-07-15T17:00:00Z',
  },
  {
    id: '9c6ebf9b-f666-44da-b79f-5f62517f55fc',
    name: '나이스컷 고급 칼세트',
    description:
      '나이스컷의 고급 칼세트는 품질 높은 강화 스테인리스 블레이드로 효율적인 커팅을 가능하게 합니다. 다양한 칼 종류로 다양한 요리를 할 수 있습니다.',
    category: 'KITCHENWARE',
    price: 99000,
    stock: 5,
    createdAt: '2023-07-15T17:30:00Z',
    updatedAt: '2023-07-15T17:30:00Z',
  },
  {
    id: '17cc4f9c-1e71-4782-914a-c8a12dc6f94b',
    name: '아벤크롬비 스니커즈',
    description:
      '아벤크롬비의 스니커즈는 스포티한 디자인과 편안한 착용감으로 인기 있는 제품입니다. 고품질 소재와 세련된 스타일로 멋진 캐주얼 룩을 완성할 수 있습니다.',
    category: 'FASHION',
    price: 89000,
    stock: 10,
    createdAt: '2023-07-15T18:00:00Z',
    updatedAt: '2023-07-15T18:00:00Z',
  },
  {
    id: 'c1b31e2b-6d6a-4b24-b3ea-d0746f9cc6ea',
    name: '피오라 러브포이즌 향수',
    description:
      '피오라의 러브포이즌 향수는 상쾌하고 여성스러운 향기로 매력적인 분위기를 연출합니다. 오래 지속되는 향과 우아한 디자인으로 사랑받는 제품입니다.',
    category: 'BEAUTY',
    price: 79000,
    stock: 8,
    createdAt: '2023-07-15T18:30:00Z',
    updatedAt: '2023-07-15T18:30:00Z',
  },
  {
    id: '5ae4a823-0076-4ae0-af49-7f3eb0002c0a',
    name: '니스 퍼퓸 캔들',
    description:
      '니스 퍼퓸의 캔들은 아로마 향으로 휴식과 힐링을 선사합니다. 품질 좋은 원료로 만들어진 캔들은 안전하고 오랜 시간 향기를 유지합니다.',
    category: 'HOME_INTERIOR',
    price: 35000,
    stock: 12,
    createdAt: '2023-07-15T19:00:00Z',
    updatedAt: '2023-07-15T19:00:00Z',
  },
  {
    id: '50ce94ef-cb04-4c2f-bad4-d36b18956b9a',
    name: '디젤 남성 슬림 핏 청바지',
    description:
      '디젤의 남성 슬림 핏 청바지는 모던하고 스타일리시한 디자인으로 인기를 끄는 제품입니다. 퀄리티한 소재와 세련된 실루엣으로 완벽한 핏을 선사합니다.',
    category: 'FASHION',
    price: 139000,
    stock: 15,
    createdAt: '2023-07-15T19:30:00Z',
    updatedAt: '2023-07-15T19:30:00Z',
  },
  {
    id: 'd6c5e7d5-225f-4f6d-ba17-6f79d32726db',
    name: '슈퍼디올 여성 선글라스',
    description:
      '슈퍼디올의 여성 선글라스는 세련된 디자인과 탁월한 안경 렌즈로 스타일과 보호를 동시에 제공합니다. 여름 휴가나 일상적인 착용에 적합합니다.',
    category: 'FASHION',
    price: 189000,
    stock: 10,
    createdAt: '2023-07-15T20:00:00Z',
    updatedAt: '2023-07-15T20:00:00Z',
  },
  {
    id: '9c2bc7ad-6f1e-491d-8d81-9ed78a805a20',
    name: '보타닉 프레쉬 화장품 세트',
    description:
      '보타닉 프레쉬의 화장품 세트는 천연 식물성 성분을 사용하여 피부에 영양과 보습을 제공합니다. 다양한 제품으로 피부 관리를 완벽하게 할 수 있습니다.',
    category: 'BEAUTY',
    price: 99000,
    stock: 15,
    createdAt: '2023-07-15T20:30:00Z',
    updatedAt: '2023-07-15T20:30:00Z',
  },
  {
    id: 'f8c95e63-ba05-4e2d-8a61-9e5b07d4ccdb',
    name: '프라다 남성 가죽 벨트',
    description:
      '프라다의 남성 가죽 벨트는 고품질 가죽 소재와 세련된 디자인으로 멋진 스타일링을 완성할 수 있습니다. 다양한 의상에 어울리는 제품입니다.',
    category: 'FASHION',
    price: 249000,
    stock: 8,
    createdAt: '2023-07-15T21:00:00Z',
    updatedAt: '2023-07-15T21:00:00Z',
  },
  {
    id: 'e6c6aeed-209d-4f3d-907e-9d208d5bcfd2',
    name: 'LG 스마트 인버터 에어컨',
    description:
      'LG의 스마트 인버터 에어컨은 효율적인 냉방과 에너지 절약을 위한 기능을 갖추고 있습니다. 스마트한 제어와 시원한 바람으로 쾌적한 환경을 제공합니다.',
    category: 'ELECTRONICS',
    price: 1399000,
    stock: 5,
    createdAt: '2023-07-15T21:30:00Z',
    updatedAt: '2023-07-15T21:30:00Z',
  },
  {
    id: 'a81dd4df-5bc4-44b5-89a0-769a7b6d3cc0',
    name: '닌텐도 스위치 라이트',
    description:
      '닌텐도 스위치 라이트는 휴대성과 다양한 게임 플레이를 위한 제품입니다. 화질과 음질이 우수하며 다양한 게임을 즐길 수 있습니다.',
    category: 'ELECTRONICS',
    price: 299000,
    stock: 5,
    createdAt: '2023-07-15T22:00:00Z',
    updatedAt: '2023-07-15T22:00:00Z',
  },
  {
    id: '6e890e6d-df7b-4c50-8d3e-59a32c48ae51',
    name: '루미에어 프리미엄 베개',
    description:
      '루미에어의 프리미엄 베개는 안락한 수면을 위한 편안한 디자인과 고품질 소재로 제작되었습니다. 적절한 지지력과 통기성을 제공합니다.',
    category: 'HOME_INTERIOR',
    price: 59000,
    stock: 10,
    createdAt: '2023-07-15T22:30:00Z',
    updatedAt: '2023-07-15T22:30:00Z',
  },
  {
    id: '7a14ccf9-8b08-4e9a-8f0f-624dcf7d6d74',
    name: '메종키츠네 남성 반팔 티셔츠',
    description:
      '메종키츠네의 남성 반팔 티셔츠는 고품질 소재와 세련된 디자인으로 스타일리시한 룩을 완성할 수 있습니다. 다양한 컬러와 패턴으로 선택의 폭을 넓힐 수 있습니다.',
    category: 'FASHION',
    price: 149000,
    stock: 12,
    createdAt: '2023-07-15T23:00:00Z',
    updatedAt: '2023-07-15T23:00:00Z',
  },
  {
    id: 'b5d2d3ad-7d92-4f17-a1e5-2260a2d69d0d',
    name: '올림포스 포터블 프린터',
    description:
      '올림포스의 포터블 프린터는 휴대성과 편리한 사용을 제공하는 제품입니다. 다양한 용지 크기와 고품질 인쇄를 지원합니다.',
    category: 'ELECTRONICS',
    price: 99000,
    stock: 10,
    createdAt: '2023-07-16T00:00:00Z',
    updatedAt: '2023-07-16T00:00:00Z',
  },

  {
    id: '3f0ccf0a-9980-4a55-9ef0-57e929fe813c',
    name: '디올 애디크트 립스틱',
    description:
      '디올의 애디크트 립스틱은 풍부한 컬러와 윤기로운 마무리를 선사합니다. 부드러운 발림성과 오랜 지속력으로 립 메이크업을 완성합니다.',
    category: 'BEAUTY',
    price: 45000,
    stock: 15,
    createdAt: '2023-07-16T00:30:00Z',
    updatedAt: '2023-07-16T00:30:00Z',
  },
  {
    id: 'f6a63b92-870e-4b54-8f80-7ae5e0b5be78',
    name: '삼성 갤럭시 버즈 프로',
    description:
      '삼성의 갤럭시 버즈 프로는 탁월한 음질과 노이즈 캔슬링 기능을 제공하는 무선 이어폰입니다. 스마트한 기능과 편안한 착용감을 동시에 즐길 수 있습니다.',
    category: 'ELECTRONICS',
    price: 229000,
    stock: 10,
    createdAt: '2023-07-16T01:00:00Z',
    updatedAt: '2023-07-16T01:00:00Z',
  },
  {
    id: 'd0ccffae-fa61-4e2f-88ff-2253e838bf2d',
    name: '지오다노 남성 반팔 티셔츠',
    description:
      '지오다노의 남성 반팔 티셔츠는 심플하면서도 스타일리시한 디자인으로 인기를 끄는 제품입니다. 퀄리티한 소재와 편안한 착용감을 제공합니다.',
    category: 'FASHION',
    price: 29000,
    stock: 12,
    createdAt: '2023-07-16T01:30:00Z',
    updatedAt: '2023-07-16T01:30:00Z',
  },
  {
    id: '8a131b86-7b3e-44c2-a02b-b17c69a2c780',
    name: '필립스 공기청정기',
    description:
      '필립스의 공기청정기는 공기 중의 먼지와 유해 물질을 효과적으로 제거하여 깨끗한 공기를 유지합니다. 소음이 적고 사용이 편리합니다.',
    category: 'ELECTRONICS',
    price: 119000,
    stock: 8,
    createdAt: '2023-07-16T02:00:00Z',
    updatedAt: '2023-07-16T02:00:00Z',
  },
  {
    id: 'f8cb3992-c455-4c9a-9736-1f94a83b3e6f',
    name: '후아유 촉촉 수분 선크림',
    description:
      '후아유의 촉촉 수분 선크림은 가볍고 촉촉한 텍스처로 피부에 쉽게 흡수되며 자외선 차단과 피부 보호를 동시에 제공합니다.',
    category: 'BEAUTY',
    price: 39000,
    stock: 15,
    createdAt: '2023-07-16T02:30:00Z',
    updatedAt: '2023-07-16T02:30:00Z',
  },
  {
    id: '78e5b047-f28e-4b3e-9c62-54c2d12565cd',
    name: '조지아 아이스 커피',
    description:
      '조지아 아이스 커피는 진하고 풍부한 커피 맛과 시원한 얼음으로 상쾌한 음료를 즐길 수 있습니다. 휴대하기 편리한 캔 형태로 제공됩니다.',
    category: 'HOUSEHOLD_SUPPLIES',
    price: 2000,
    stock: 50,
    createdAt: '2023-07-16T03:00:00Z',
    updatedAt: '2023-07-16T03:00:00Z',
  },
  {
    id: 'b8e3e8d9-0f39-4f2e-99a0-1c00c8f5d9e1',
    name: '헤스티아 화장지',
    description:
      '헤스티아의 화장지는 부드럽고 흡수력이 뛰어나며 피부 친화적인 소재로 만들어진 제품입니다. 편리한 사용감과 위생성을 제공합니다.',
    category: 'HOUSEHOLD_SUPPLIES',
    price: 5000,
    stock: 30,
    createdAt: '2023-07-16T03:30:00Z',
    updatedAt: '2023-07-16T03:30:00Z',
  },
  {
    id: '0d8e554a-84c0-4b9c-bdc3-d04b9bbf1344',
    name: '탐스킨 리뉴얼 페이셜 클렌저',
    description:
      '탐스킨의 리뉴얼 페이셜 클렌저는 부드러운 거품과 깨끗한 세정력으로 피부를 깨끗하게 유지합니다. 피부에 자극을 주지 않는 올인원 클렌저입니다.',
    category: 'BEAUTY',
    price: 15000,
    stock: 20,
    createdAt: '2023-07-16T04:00:00Z',
    updatedAt: '2023-07-16T04:00:00Z',
  },
  {
    id: '1cc006a0-82a3-4e70-8d92-974d1ea9c3af',
    name: '카시오 베이비-지 시계',
    description:
      '카시오 베이비-지 시계는 귀여운 디자인과 실용적인 기능을 가진 어린이용 시계입니다. 내추럴 라이트와 방수 기능을 갖추고 있습니다.',
    category: 'ELECTRONICS',
    price: 59000,
    stock: 10,
    createdAt: '2023-07-16T04:30:00Z',
    updatedAt: '2023-07-16T04:30:00Z',
  },
  {
    id: '85fc2182-8b7f-47f1-8f3d-911e0a3c0582',
    name: '홀리바나나 남성 가죽 슬리퍼',
    description:
      '홀리바나나 남성 가죽 슬리퍼는 편안한 착용감과 세련된 디자인으로 인기를 끄는 제품입니다. 고품질 가죽 소재와 내구성을 겸비하고 있습니다.',
    category: 'FASHION',
    price: 79000,
    stock: 8,
    createdAt: '2023-07-16T05:00:00Z',
    updatedAt: '2023-07-16T05:00:00Z',
  },
  {
    id: 'd9e3f6ae-04e5-4a7b-8c7c-2d582af08489',
    name: '티파니 실버 팔찌',
    description:
      '티파니의 실버 팔찌는 우아하고 고급스러운 디자인으로 많은 사랑을 받는 제품입니다. 실버 소재와 섬세한 장식이 특징입니다.',
    category: 'FASHION',
    price: 289000,
    stock: 5,
    createdAt: '2023-07-16T05:30:00Z',
    updatedAt: '2023-07-16T05:30:00Z',
  },
  {
    id: '10f12b65-20f5-43d9-860e-faf4890e2a9e',
    name: '조던 남성 농구화',
    description:
      '조던의 남성 농구화는 탁월한 풋워크와 스트라이드를 위한 디자인과 탁월한 지지력을 제공합니다. 전문 농구 선수들의 선택입니다.',
    category: 'SPORTS',
    price: 189000,
    stock: 5,
    createdAt: '2023-07-16T06:00:00Z',
    updatedAt: '2023-07-16T06:00:00Z',
  },
  {
    id: '6922d7f9-72d6-46fe-8b0e-890700aa8f13',
    name: '유니클로 남성 셔츠',
    description:
      '유니클로의 남성 셔츠는 심플하면서도 편안한 디자인으로 인기를 끄는 제품입니다. 다양한 컬러와 스타일로 선택의 폭을 넓힐 수 있습니다.',
    category: 'FASHION',
    price: 25000,
    stock: 10,
    createdAt: '2023-07-16T06:30:00Z',
    updatedAt: '2023-07-16T06:30:00Z',
  },
  {
    id: 'e5d7a4f3-9e21-4125-9e1c-216d5a226b74',
    name: '베리알 남성 어깨 가방',
    description:
      '베리알의 남성 어깨 가방은 실용적인 디자인과 고품질 소재로 제작되었습니다. 여행이나 일상적인 외출에 편리한 수납 공간을 제공합니다.',
    category: 'FASHION',
    price: 69000,
    stock: 8,
    createdAt: '2023-07-16T07:00:00Z',
    updatedAt: '2023-07-16T07:00:00Z',
  },
  {
    id: 'f751e63f-686d-42d4-898e-3ef6d4137908',
    name: '키친아트 커피머신',
    description:
      '키친아트의 커피머신은 다양한 커피 메뉴를 즐길 수 있는 다기능 제품입니다. 간편한 조작과 풍부한 맛을 선사합니다.',
    category: 'KITCHENWARE',
    price: 89000,
    stock: 5,
    createdAt: '2023-07-16T07:30:00Z',
    updatedAt: '2023-07-16T07:30:00Z',
  },
  {
    id: '1e112c02-7c92-4d52-b76e-485e41e3f64d',
    name: '파나소닉 전기 면도기',
    description:
      '파나소닉의 전기 면도기는 부드럽고 깨끗한 면도 경험을 제공합니다. 섬세한 면도와 피부 자극을 최소화합니다.',
    category: 'ELECTRONICS',
    price: 79000,
    stock: 5,
    createdAt: '2023-07-16T08:00:00Z',
    updatedAt: '2023-07-16T08:00:00Z',
  },
  {
    id: '19a6ce8e-70ed-4e3c-832a-ba3541a7da15',
    name: '보브의 화장 솔루션 세트',
    description:
      '보브의 화장 솔루션 세트는 다양한 솔루션으로 메이크업을 완벽하게 지원합니다. 피부에 자연스러운 톤과 미세한 마무리를 제공합니다.',
    category: 'BEAUTY',
    price: 39000,
    stock: 15,
    createdAt: '2023-07-16T02:15:00Z',
    updatedAt: '2023-07-16T02:15:00Z',
  },
];

export const ORDERS = [
  {
    id: '9fde1702-08d7-407c-8e6e-65e24f6a8237',
    status: 'PENDING',
    createdAt: '2023-07-16T09:00:00Z',
    updatedAt: '2023-07-16T09:00:00Z',
    userId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
  {
    id: '52933c6e-b118-445f-99f1-d2e07fd1c3d0',
    status: 'COMPLETE',
    createdAt: '2023-07-16T09:30:00Z',
    updatedAt: '2023-07-16T09:30:00Z',
    userId: '6c3a18b0-11c5-4d97-9019-9ebe3c4d1317',
  },
  {
    id: 'dedd2a7f-56c4-45b7-a37d-efdc1d2f518d',
    status: 'PENDING',
    createdAt: '2023-07-16T10:00:00Z',
    updatedAt: '2023-07-16T10:00:00Z',
    userId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: '7c5dd97a-b86b-4b7f-9da7-d6d9258f8d66',
    status: 'COMPLETE',
    createdAt: '2023-07-16T10:30:00Z',
    updatedAt: '2023-07-16T10:30:00Z',
    userId: '70e1e61d-f2ae-4d7d-bf8f-d65eafdb6a45',
  },
  {
    id: 'a03b7801-d6d9-456d-ba3e-0e73750bc6b2',
    status: 'PENDING',
    createdAt: '2023-07-16T11:00:00Z',
    updatedAt: '2023-07-16T11:00:00Z',
    userId: '73cb9639-d8b7-4f11-9a62-53f4187f3f11',
  },
  {
    id: 'ae7597de-6601-4a9e-8047-9dd9f6e57e94',
    status: 'COMPLETE',
    createdAt: '2023-07-16T11:30:00Z',
    updatedAt: '2023-07-16T11:30:00Z',
    userId: 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e',
  },
  {
    id: 'e03c2d89-3623-4e4c-98f6-facbd1266023',
    status: 'PENDING',
    createdAt: '2023-07-16T12:00:00Z',
    updatedAt: '2023-07-16T12:00:00Z',
    userId: '6c3a18b0-11c5-4d97-9019-9ebe3c4d1317',
  },
  {
    id: 'b5f8e405-8b95-4cb2-8b3b-ee1573da4fc2',
    status: 'COMPLETE',
    createdAt: '2023-07-16T12:30:00Z',
    updatedAt: '2023-07-16T12:30:00Z',
    userId: 'fd3ae0a5-8dd5-40b6-b8fd-48870f731db1',
  },
  {
    id: 'f5c8e4be-c69f-4e74-b48a-1671cbeff9a2',
    status: 'PENDING',
    createdAt: '2023-07-16T13:00:00Z',
    updatedAt: '2023-07-16T13:00:00Z',
    userId: '70e1e61d-f2ae-4d7d-bf8f-d65eafdb6a45',
  },
  {
    id: '329fcafe-4e1a-475a-9526-50c2678126db',
    status: 'COMPLETE',
    createdAt: '2023-07-16T13:30:00Z',
    updatedAt: '2023-07-16T13:30:00Z',
    userId: '73cb9639-d8b7-4f11-9a62-53f4187f3f11',
  },
];

export const ORDER_ITEMS = [
  {
    id: 'ba758e4c-4ff1-4e61-ae94-6d727f7381d6',
    unitPrice: 38000,
    quantity: 2,
    createdAt: '2023-07-16T09:00:00Z',
    updatedAt: '2023-07-16T09:00:00Z',
    orderId: '9fde1702-08d7-407c-8e6e-65e24f6a8237',
    productId: 'f8013040-b076-4dc4-8677-11be9a17162f',
  },
  {
    id: 'a06a7eb9-75e3-4b13-81d5-9f1dd7a05175',
    unitPrice: 70000,
    quantity: 1,
    createdAt: '2023-07-16T09:30:00Z',
    updatedAt: '2023-07-16T09:30:00Z',
    orderId: '52933c6e-b118-445f-99f1-d2e07fd1c3d0',
    productId: 'd2ff3048-83bc-425a-8ad3-d6d9af1c7c6d',
  },
  {
    id: 'f753a259-1e26-4ed9-9e60-099a4a06af4f',
    unitPrice: 320000,
    quantity: 1,
    createdAt: '2023-07-16T10:00:00Z',
    updatedAt: '2023-07-16T10:00:00Z',
    orderId: 'dedd2a7f-56c4-45b7-a37d-efdc1d2f518d',
    productId: '7f70481b-784d-4b0e-bc3e-f05eefc17951',
  },
  {
    id: '1fc98d4c-7571-4d1a-8808-4d76473f95e0',
    unitPrice: 50000,
    quantity: 5,
    createdAt: '2023-07-16T10:30:00Z',
    updatedAt: '2023-07-16T10:30:00Z',
    orderId: '7c5dd97a-b86b-4b7f-9da7-d6d9258f8d66',
    productId: '4e0d9424-3a16-4a5e-9725-0e9d2f9722b3',
  },
  {
    id: 'ab8e97f4-10ae-4ce6-a06d-d638d8b7efc6',
    unitPrice: 650000,
    quantity: 1,
    createdAt: '2023-07-16T11:00:00Z',
    updatedAt: '2023-07-16T11:00:00Z',
    orderId: 'a03b7801-d6d9-456d-ba3e-0e73750bc6b2',
    productId: '39c3fd4a-dbd5-4ab1-8e0b-58ea31b8a2d3',
  },
  {
    id: 'f161aa17-860e-4be5-87f5-b6097b5d493e',
    unitPrice: 1249000,
    quantity: 2,
    createdAt: '2023-07-16T11:30:00Z',
    updatedAt: '2023-07-16T11:30:00Z',
    orderId: 'a03b7801-d6d9-456d-ba3e-0e73750bc6b2',
    productId: 'c2d4a2e3-7c2a-4f80-bff7-8ebcbacccf2c',
  },
  {
    id: 'e5f7d938-b39f-4d48-9eb9-af438b564c7e',
    unitPrice: 1399000,
    quantity: 3,
    createdAt: '2023-07-16T12:00:00Z',
    updatedAt: '2023-07-16T12:00:00Z',
    orderId: 'ae7597de-6601-4a9e-8047-9dd9f6e57e94',
    productId: '43c62d5b-6e66-4d1c-9f47-14d1a1970fd1',
  },
  {
    id: 'b689cc3e-7174-4db6-9267-ba9f1a271fc7',
    unitPrice: 169000,
    quantity: 2,
    createdAt: '2023-07-16T12:30:00Z',
    updatedAt: '2023-07-16T12:30:00Z',
    orderId: 'ae7597de-6601-4a9e-8047-9dd9f6e57e94',
    productId: '6e9d4e63-7246-4fc5-bf33-3e7f32fe9c02',
  },
  {
    id: 'f5c377d3-9fe5-437b-999b-402d6e77a719',
    unitPrice: 1800000,
    quantity: 1,
    createdAt: '2023-07-16T13:00:00Z',
    updatedAt: '2023-07-16T13:00:00Z',
    orderId: 'e03c2d89-3623-4e4c-98f6-facbd1266023',
    productId: '80e7b377-df80-4410-9a14-622ea3cc58e0',
  },
  {
    id: 'ff9db6b9-50c0-4a25-8b46-bdb82b2fcf02',
    unitPrice: 35000,
    quantity: 4,
    createdAt: '2023-07-16T13:30:00Z',
    updatedAt: '2023-07-16T13:30:00Z',
    orderId: 'e03c2d89-3623-4e4c-98f6-facbd1266023',
    productId: 'a4ff201c-48f7-4963-b317-2e9e4e3e43b7',
  },
  {
    id: '8c714670-2772-4aae-bc75-ee11f272e8db',
    unitPrice: 750000,
    quantity: 2,
    createdAt: '2023-07-16T14:00:00Z',
    updatedAt: '2023-07-16T14:00:00Z',
    orderId: 'b5f8e405-8b95-4cb2-8b3b-ee1573da4fc2',
    productId: 'c6a5975a-42e7-4f7f-8b7c-72714d59f44a',
  },
  {
    id: 'e5dcdb0c-7837-4a3d-97a3-8fc3ae4f19d4',
    unitPrice: 1799000,
    quantity: 1,
    createdAt: '2023-07-16T14:30:00Z',
    updatedAt: '2023-07-16T14:30:00Z',
    orderId: 'b5f8e405-8b95-4cb2-8b3b-ee1573da4fc2',
    productId: 'a33d441f-57a9-4618-8f46-07e7418ef3c9',
  },
  {
    id: '2e3fc058-d77e-4743-a5ce-81cb770f367d',
    unitPrice: 27000,
    quantity: 3,
    createdAt: '2023-07-16T15:00:00Z',
    updatedAt: '2023-07-16T15:00:00Z',
    orderId: 'f5c8e4be-c69f-4e74-b48a-1671cbeff9a2',
    productId: 'f6c2a70e-32a4-4bcf-b183-8a33d97fb587',
  },
  {
    id: 'e83c30b7-0988-4fe1-a4f7-535da83bb042',
    unitPrice: 59000,
    quantity: 1,
    createdAt: '2023-07-16T15:30:00Z',
    updatedAt: '2023-07-16T15:30:00Z',
    orderId: 'f5c8e4be-c69f-4e74-b48a-1671cbeff9a2',
    productId: 'e700c4be-6e0c-40fd-bb47-2ab2b2e9270d',
  },
  {
    id: 'ef69be07-6a91-4c47-a638-027e33bda9c6',
    unitPrice: 1999000,
    quantity: 1,
    createdAt: '2023-07-16T16:00:00Z',
    updatedAt: '2023-07-16T16:00:00Z',
    orderId: '329fcafe-4e1a-475a-9526-50c2678126db',
    productId: 'be13a617-8f0e-4806-82f7-149a6e12f1a7',
  },
  {
    id: 'b7f117e7-1283-4964-8358-fc6a438bfc7f',
    unitPrice: 59000,
    quantity: 4,
    createdAt: '2023-07-14T09:00:01Z',
    updatedAt: '2023-07-14T09:00:01Z',
    orderId: '9fde1702-08d7-407c-8e6e-65e24f6a8237',
    productId: '6e890e6d-df7b-4c50-8d3e-59a32c48ae51',
  },
  {
    id: 'a8ee9e47-4b30-495e-92ab-4e84903c9cfd',
    unitPrice: 35000,
    quantity: 2,
    createdAt: '2023-07-14T09:00:01Z',
    updatedAt: '2023-07-14T09:00:01Z',
    orderId: '7c5dd97a-b86b-4b7f-9da7-d6d9258f8d66',
    productId: 'b1782c1e-8ad2-45a7-90e6-50f61c4a8de9',
  },
  {
    id: 'eeed5dbf-4ae3-4f8b-8a83-9eadd7d5364b',
    unitPrice: 189000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:01Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: '52933c6e-b118-445f-99f1-d2e07fd1c3d0',
    productId: 'd6c5e7d5-225f-4f6d-ba17-6f79d32726db',
  },
  {
    id: 'd1f42fa1-17e4-4082-a5e7-988f1d3a12c5',
    unitPrice: 12000,
    quantity: 2,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'dedd2a7f-56c4-45b7-a37d-efdc1d2f518d',
    productId: '9c2bc7ad-6f1e-491d-8d81-9ed78a805a20',
  },
  {
    id: 'e5a5a77a-aa8b-43a5-8a4e-2f9dd89831f5',
    unitPrice: 99000,
    quantity: 2,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'a03b7801-d6d9-456d-ba3e-0e73750bc6b2',
    productId: '5ae4a823-0076-4ae0-af49-7f3eb0002c0a',
  },
  {
    id: 'd61d2aaf-64a1-4c45-b0ea-08ad7114e27b',
    unitPrice: 90000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: '7c5dd97a-b86b-4b7f-9da7-d6d9258f8d66',
    productId: 'b5d2d3ad-7d92-4f17-a1e5-2260a2d69d0d',
  },
  {
    id: '3f4c686b-54c7-4076-8e17-d48b4a4fd53e',
    unitPrice: 25000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'dedd2a7f-56c4-45b7-a37d-efdc1d2f518d',
    productId: 'c28a2eaf-4d87-4f9f-ae5b-cbcf73e24253',
  },
  {
    id: '3835b76a-77ef-4fd1-91bc-ee67065130b7',
    unitPrice: 1890000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'f5c8e4be-c69f-4e74-b48a-1671cbeff9a2',
    productId: 'be07b27a-93e9-4d1a-8a54-133c0f04541e',
  },
  {
    id: 'd27c1890-ba7e-4cb3-91fb-977b0b8ff77b',
    unitPrice: 399000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'dedd2a7f-56c4-45b7-a37d-efdc1d2f518d',
    productId: 'de573676-2a27-4cfa-85a1-0e9dd3ed5315',
  },
  {
    id: 'e41bcab5-b408-4428-9a5a-b6f70f6a86a9',
    unitPrice: 79000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'a03b7801-d6d9-456d-ba3e-0e73750bc6b2',
    productId: '9c6ebf9b-f666-44da-b79f-5f62517f55fc',
  },
  {
    id: '06d69334-8003-415f-8ad9-bd78bbf25512',
    unitPrice: 59000,
    quantity: 2,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'b5f8e405-8b95-4cb2-8b3b-ee1573da4fc2',
    productId: '1cc006a0-82a3-4e70-8d92-974d1ea9c3af',
  },
  {
    id: '6b344ab9-3a26-4daa-858f-2ed464a76904',
    unitPrice: 9000,
    quantity: 2,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'ae7597de-6601-4a9e-8047-9dd9f6e57e94',
    productId: '85fc2182-8b7f-47f1-8f3d-911e0a3c0582',
  },
  {
    id: '9a918a82-8e1e-442f-96a5-05205199547f',
    unitPrice: 79000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:02Z',
    updatedAt: '2023-07-14T09:00:02Z',
    orderId: 'dedd2a7f-56c4-45b7-a37d-efdc1d2f518d',
    productId: 'd9e3f6ae-04e5-4a7b-8c7c-2d582af08489',
  },
  {
    id: 'e593d45c-c244-4e53-92a6-33450a6d8f18',
    unitPrice: 189000,
    quantity: 1,
    createdAt: '2023-07-14T09:00:03Z',
    updatedAt: '2023-07-14T09:00:03Z',
    orderId: '7c5dd97a-b86b-4b7f-9da7-d6d9258f8d66',
    productId: '10f12b65-20f5-43d9-860e-faf4890e2a9e',
  },
  {
    id: '64637bcf-531e-4569-8d5d-80801363821e',
    unitPrice: 20000,
    quantity: 4,
    createdAt: '2023-07-14T09:00:03Z',
    updatedAt: '2023-07-14T09:00:03Z',
    orderId: 'f5c8e4be-c69f-4e74-b48a-1671cbeff9a2',
    productId: '6922d7f9-72d6-46fe-8b0e-890700aa8f13',
  },
];