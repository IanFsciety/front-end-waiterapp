import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: white;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      background: transparent;
      border: 0;

    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    & + .item {
      margin-top: 16px;
    }

    .item {
      display: flex;
    }

    img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        margin-bottom: 4px;
        strong {
          display: block;
        }

        span{
          font-size: 14px;
          color:#666;
        }
      }
  }

  .total {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333;
    border: 0;
    border-radius: 48px;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary{
    padding: 14px 24px;
    color: #d73035;
    background: transparent;
    border: 0;
    margin-top: 12px;
  }
`;

