export const initialState = {
  User: [
    {
      id: 1,
      name: 'kimcoding',
      phone: '010-0000-0000',
      email: 'kimcoding@gmail.com',
      image:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbftRiB%2FbtqAjaghSBk%2F5CcN9W5qyCU8HLylVYcXb1%2Fimg.png',
      loginType: 'kakao',
      createdAt: '2021.09.17',
      updatedAt: '2021.09.17',
    },
  ],
  userInfo: [
    {
      id: 1,
      name: 'kimcoding',
      phone: '010-0000-0000',
      email: 'kimcoding@gmail.com',
      image:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbftRiB%2FbtqAjaghSBk%2F5CcN9W5qyCU8HLylVYcXb1%2Fimg.png',
      loginType: 'kakao',
      createdAt: '2021.09.17',
      updatedAt: '2021.09.17',
    },
  ],
  bingo: {
    year: 2021,
    userId: 1,
    bucketList: [
      {
        id: 1,
        title: '제주 한달 살기',
        score: 100,
      },
      {
        id: 2,
        title: '운동 3개월 이상 등록하기',
        score: 100,
      },
      {
        id: 3,
        title: '모던 자바스크립트 책 읽기',
        score: 100,
      },
      {
        id: 4,
        title: '부모님과 맛있는거 먹기',
        score: 50,
      },
      {
        id: 5,
        title: '비타민 구매하기',
        score: 70,
      },
      {
        id: 6,
        title: '취직하기',
        score: 0,
      },
      {
        id: 7,
        title: '이사가기',
        score: 100,
      },
      {
        id: 8,
        title: '친구들한테 편지쓰기',
        score: 60,
      },
      {
        id: 9,
        title: 'C50 완강',
        score: 30,
      },
    ],
  },
  community: [
    {
      id: 1,
      userId: 'kimcoding',
      time: '7D 3H 20S'
    },
    {
      id: 2,
      userId: 'soyou',
      time: '10D 2H 18S'
    },
    {
      id: 3,
      userId: 'canI',
      time: '11D 6H 10S'
    },
    {
      id: 4,
      userId: 'seeyou',
      time: '18D 2H 20S'
    },
    {
      id: 5,
      userId: 'skytothemoon',
      time: '18D 3H 21S'
    },
    {
      id: 6,
      userId: 'thelove',
      time: '21D 9H 28S'
    },
    {
      id: 7,
      userId: 'icandoit',
      time: '22D 7H 6S'
    },
    {
      id: 8,
      userId: 'younyaho',
      time: '25D 1H 21S'
    },
    {
      id: 9,
      userId: 'hellobingo',
      time: '40D 2H 1S'
    },
    {
      id: 10,
      userId: 'notebook',
      time: '46D 19H 36S'
    },
  ],
};
