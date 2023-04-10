import { Socials } from './Socials';

export const Profile = ({ info: { id, image, name, position, socials } }) => {
  console.log("id", id);
  return (
    <li key={id} class="item" data-id={id}>
      <img src={image} alt={name} width="270" height="260" class="images" />

      <div class="team-caption">
        <h3 class="name">{name}</h3>
        <p class="position">{position}</p>
      </div>

      <div>
        <ul class="social list">
          <Socials socials={socials.instagram} id="soc-id-1" name="instagram" />
          <Socials socials={socials.twitter} id="soc-id-2" name="twitter" />
          <Socials socials={socials.facebook} id="soc-id-3" name="facebook" />
          <Socials socials={socials.linkedin} id="soc-id-4" name="linkedin" />
        </ul>
      </div>
    </li>
  );
};
