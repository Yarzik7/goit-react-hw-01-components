
export const Items = ({ props }) => {
    return (
      <li>
        <span className="label">{props[0]}</span>
        <span className="quantity">{props[1]}</span>
      </li>
    );
} 