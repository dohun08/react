import { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import useGetTopData from "./hooks/useGetTopMovies";
function App() {
    const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} = useGetTopData();
    const [food, setFood] = useState([]);
  const [ref, inView] = useInView();
  console.log(data)

  useEffect(()=>{
    if (data && data.pages.length > 0) {
      // 모든 페이지의 item을 가져와서 food 상태에 추가합니다.
      const newFoodItems = data.pages.flatMap(page => page.getFoodKr.item || []);
      setFood(newFoodItems);
      console.log("All Food Items:", newFoodItems); // 모든 음식 항목 로그
    }
  }, [data])
  useEffect(() => {
    if(inView && hasNextPage && !isFetchingNextPage){
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <h1>Food List</h1>
            {food.length > 0 ? (
                <ul>
                    {food.map((item, index) => (
                        <Ls key={index}>{item.MAIN_TITLE}</Ls>
                    ))}
                </ul>
            ) : (
                <p>No food data available</p>
            )}
            <h2 ref={ref}>Load More</h2>
    </>
  );
}

export default App;

const Ls = styled.li`
  padding: 50px;
`;
