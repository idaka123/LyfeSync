import styled from 'styled-components'

const Loading = () => {
  return (
    <Container>
        <TaskCardContainer >
              <div className="card-title">
                <FakeLine style={{width: "300px", borderRadius: "5px", height: "18px"}}></FakeLine>
                <FakeLine style={{width: "250px", height: "18px", marginTop: "10px"}}></FakeLine>
                <FakeLine style={{width: "200px", height: "18px", marginTop: "10px"}}></FakeLine>
              </div>
        </TaskCardContainer>
    </Container>
  )
}

export default Loading

const Container = styled.div`
  
`

const TaskCardContainer = styled.div `
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 16px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);
    padding: 1.4rem 1.3rem;
    transition: all .3s ease-in-out;
    display: flex;

    .card-title{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

`

const FakeLine = styled.div ` 

    @keyframes shine-lines {
      0% {
        background-position: -100px;
      }
      to {
        background-position: 600px;
      }
    }

    background-color: var(--skeleton-second);
    border-radius: 5px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    animation: shine-lines 1.6s infinite linear;
`
