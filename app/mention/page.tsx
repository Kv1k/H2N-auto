const mention = () => {
  return (
    <div className="py-[20px] px-24 bg-[#061D56] h-auto text-white text-[18px]">
      <h1 className="text-center text-[38px] my-3">Mentions Légales</h1>

      <section>
        <h2 className="font-bold text-[28px]">1. Informations légales</h2>
        <p className="pl-8 py-3">
          <strong>Propriétaire du site :</strong> H2N Automobile<br />
          <strong>Adresse :</strong> 5 Rue du Genévrier, 34920 Le Crés, France<br />
          <strong>Téléphone :</strong> +33 4 67 70 28 08<br />
          <strong>Email :</strong> h2n-automobile@free.fr<br />
          <strong>SIRET :</strong> 414 864 835 00015<br />
        </p>
      </section>

      <section>
        <h2 className="font-bold text-[28px]">2. Hébergement</h2>
        <p className="pl-8 py-3">
          Le site est hébergé par : <strong>Vercel Inc.</strong><br />
          Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
          Site web : <a className="hover:underline" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>
      </section>

      <section>
        <h2 className="font-bold text-[28px]">3. Protection des données personnelles</h2>
        <p  className="pl-8 py-3">
          H2N Automobile respecte votre vie privée et ne collecte aucune donnée personnelle à des fins de marketing ou d'analyse.
          Le site ne contient aucun cookie ni outil de suivi.
        </p>
        <p className="pl-8 pb-3">
          <strong>Formulaire de contact :</strong> Les informations que vous fournissez via le formulaire de contact (comme votre nom, email et message) sont utilisées uniquement pour répondre à votre demande. Ces informations ne sont pas stockées dans une base de données et ne sont pas partagées avec des tiers.
        </p>
      </section>

      <section>
        <h2 className="font-bold text-[28px]">4. Propriété intellectuelle</h2>
        <p className="pl-8 py-3">
          Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de H2N Automobile ou de leurs auteurs respectifs.
          Toute reproduction, distribution, modification, adaptation ou publication de ces contenus, sans l'autorisation écrite préalable de H2N Automobile, est strictement interdite.
        </p>
      </section>

      <section>
        <h2 className="font-bold text-[28px]">5. Limitations de responsabilité</h2>
        <p className="pl-8 py-3">
          H2N Automobile s'efforce de maintenir les informations de ce site à jour et exactes. Cependant, nous ne pouvons garantir l'absence d'erreurs ou d'omissions.
          En utilisant ce site, vous acceptez de le faire à vos propres risques. H2N Automobile ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
        </p>
      </section>
      <section>
        <h2  className="font-bold text-[28px]">6. Liens hypertextes</h2>
        <p className="pl-8 py-3">
          La mise en place de liens hypertextes vers le site doit faire l'objet d'une autorisation préalable de H2N Automobile. H2N Automobile décline toute responsabilité quant au contenu des sites externes liés.
        </p>
      </section>
      <section>
        <h2 className="font-bold text-[28px]">7. Contact</h2>
        <p className="pl-8 py-3">
          Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante :{" "}
          <a href="mailto:h2n-automobile@free.fr" className="hover:underline">h2n-automobile@free.fr</a>.
        </p>
      </section>
    </div>
  );
};

export default mention;
