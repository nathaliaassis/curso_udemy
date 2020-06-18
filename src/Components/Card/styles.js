import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 16px;
  min-width: 350px;
  max-width: 600px;
  margin: 12px auto;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  background-color: ${props => props.bg};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  font-size: 24px;
  letter-spacing: 1.4px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;
export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  color: #313131;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1.5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  li{
    list-style: none;
  }

  table{
    border: 1px solid #ddd;
    border-spacing: 0;
    thead{
      padding: 16px;

      th{
        text-align: left;
      }
    }
    th, td{
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }
    td:first-child{
      text-align: center;
    }
  }
`;