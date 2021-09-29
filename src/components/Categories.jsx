import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import categoryData from "../categoryData";

function Categories() {
  return (
    <Container>
      {categoryData.map((item) => (
        <CategoryCard
          item={item}
          id={item.id}
          title={item.title}
          img={item.img}
        />
      ))}
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px 0px;
  align-items: center;
  justify-content: center;
`;
