export const Socials = ({ socials, id, name}) => {
  const svg = '/goit-react-hw-01-components/images/icons.svg#' + name;
  return (
    <li key={id} class="item" data-idsoc={id}>
      <a href={socials} class="link">
        <svg class="icon" width="20" height="20">
          <use href={svg}></use>
        </svg>
      </a>
    </li>
  );
};
