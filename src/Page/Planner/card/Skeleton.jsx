import styled from 'styled-components'

const Skeleton = () => {
  return (
    <Container>
        <div className="title-wrapper">
            <FakeLineSmall style={{width: "130px", height: "18px"}}></FakeLineSmall>
        </div>
        {["", "", "", "", ""].map((data, idx) => {
            return (
                <TaskCardContainer key={idx} >
                      <div className="card-title">
                        <FakeLineLarge style={{width: "300px", height: "18px"}}></FakeLineLarge>
                        <FakeLineMedium style={{width: "250px", height: "18px", marginTop: "10px"}}></FakeLineMedium>
                        <FakeLineMedium style={{width: "250px", height: "18px", marginTop: "10px"}}></FakeLineMedium>
                      </div>
                </TaskCardContainer>
        )
        })}
    </Container>
  )
}

export default Skeleton

const Container = styled.div`
    .title-wrapper {
        padding-top: 25px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
`

const TaskCardContainer = styled.div `
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-bottom: 15px;
    box-shadow: 0 0px 3px -1px rgba(0,0,0,.12), 0 0px 0px 0 rgba(0,0,0,.08);
    padding: 1.4rem 1.3rem;
    transition: all .3s ease-in-out;
    display: flex;

    .card-title{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

`

const FakeLineLarge = styled.div ` 
    --width: 300px;
    @keyframes shine-lines {
      0% {
        background-position: 0px;
      }
      to {
        background-position:var(--width);
      }
    }
    width: var(--width);
    background-color: var(--skeleton-second);
    border-radius: 5px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    animation: shine-lines 1.6s infinite linear;
`

const FakeLineMedium = styled.div ` 
    --width: 250px;
    @keyframes shine-lines {
      0% {
        background-position: 0px;
      }
      to {
        background-position: var(--width);
      }
    }
    width: var(--width);
    background-color: var(--skeleton-second);
    border-radius: 5px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    animation: shine-lines 1.6s infinite linear;
`
const FakeLineSmall = styled.div ` 
    --width: 130px;

    @keyframes shine-lines {
      0% {
        background-position: 0px;
      }
      to {
        background-position: var(--width);
      }
    }
    width: var(--width);
    background-color: var(--skeleton-second);
    border-radius: 5px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    animation: shine-lines 1.6s infinite linear;
`
