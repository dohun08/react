import { useInfiniteQuery } from "@tanstack/react-query";

const API_KEY = "VXHeevb98qPGulghtEUlgeohqgNGgAQfUsyQnsD9cDmeCGgJwAK5RBV8JZhC6%2BXzec%2F6KWfW2dI41OaWwEhq5g%3D%3D";
const fetchGet = async (page) => {
    const response = await fetch(`http://apis.data.go.kr/6260000/FoodService/getFoodKr?ServiceKey=${API_KEY}&pageNo=${page}&numOfRows=10&resultType=json`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const json = await response.json();
    return json;
};

const useGetTopData = () => {
    return useInfiniteQuery({
        queryKey: ['top-rated-Movie'],
        queryFn: ({ pageParam = 1 }) => fetchGet(pageParam),
        getNextPageParam: (last) => {
            const currentPage = last.getFoodKr.pageNo || 1; // 현재 페이지
            const totalCount = last.getFoodKr.totalCount || 0; // 총 데이터 수
            const numOfRows = last.getFoodKr.numOfRows || 10; // 페이지당 데이터 수
            
            const totalPages = Math.ceil(totalCount / numOfRows); // 총 페이지 수 계산
            
            console.log("Current Page:", currentPage);
            console.log("Total Pages:", totalPages);

            // 다음 페이지 반환
            if (currentPage < totalPages) {
                return currentPage + 1; // 다음 페이지 번호 반환
            }
            return undefined; // 마지막 페이지 도달 시 undefined 반환
        },
        initialPageParam: 1,
    });
};

export default useGetTopData;
