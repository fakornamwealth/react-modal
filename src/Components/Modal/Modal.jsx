import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Iure, repellendus! Voluptates eveniet, doloribus voluptatibus enim non
        rerum provident modi fuga possimus cumque quis. Ea laudantium eaque
        vitae, neque consequatur mollitia tempore numquam nam rerum amet porro
        aspernatur. Quam officiis sint atque placeat amet repudiandae corrupti
        totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur
        quas, blanditiis, dignissimos minima. Harum inventore, fuga placeat
        deleniti animi nulla repellat ducimus, ipsa eius mollitia magni atque
        sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid
        maiores. Quis odit, eius exercitationem et in praesentium obcaecati ex
        doloribus, nostrum dolorum totam harum, reprehenderit autem nobis vitae
        molestias explicabo. Id cupiditate dolore soluta, reiciendis unde
        doloremque perspiciatis nemo sapiente laudantium ratione impedit
        voluptatibus delectus, eligendi corrupti exercitationem, adipisci eum!
        Quae aliquid hic tempora consequatur, debitis exercitationem ut natus!
        A, corrupti aut. Eos tempore veniam sunt? Aliquam praesentium, unde
        illum laboriosam, facere numquam consectetur sint ducimus in neque
        distinctio fugit accusantium nisi cumque suscipit, rem beatae aliquid
        quas dolorum doloribus esse error ut dolores? Laboriosam neque ducimus
        vero nisi quos expedita error distinctio itaque accusantium. Accusantium
        architecto ab maiores facilis est? Perferendis obcaecati aliquid eaque,
        vitae nam minus officia laudantium ullam, autem aut culpa expedita
        itaque dolor dolorem, asperiores voluptas repellat eveniet quas ea
        impedit quisquam? Aspernatur, quod! Corrupti quis nulla voluptatem
        assumenda necessitatibus. Neque, minima? Quidem nisi voluptas aliquid
        reprehenderit aspernatur doloremque minima ab quasi veniam unde optio,
        ut quo vel accusantium quisquam inventore! Atque dolorum delectus quis
        quisquam? At dicta corrupti dolorum mollitia suscipit amet perferendis
        dolor nobis, error provident dolorem reprehenderit quis odit
        perspiciatis nihil doloribus, nostrum vero ad nam, praesentium libero
        natus. Molestias vel in adipisci eius quidem pariatur at, provident modi
        facere assumenda quisquam repudiandae accusamus, corrupti ullam impedit
        harum odio ex ipsa. Repellat iste, voluptas saepe eius omnis ullam. Rem
        saepe, officia, adipisci magnam minima accusamus voluptatibus aliquid
        illum molestias ab autem quis rerum mollitia corrupti! Soluta aliquid
        doloribus repudiandae non odit voluptas error impedit, quod repellendus
        fugiat, esse distinctio quaerat cum animi excepturi qui! Vel porro quod
        non dolore exercitationem repellendus illum, quisquam architecto cum
        autem? Fuga ab perferendis et ut deserunt laboriosam ipsam perspiciatis
        consequuntur, modi molestias sint, adipisci nam, sit labore voluptatem
        quibusdam. Similique neque eum vel officiis sed perferendis corrupti
        saepe eaque fuga, nostrum inventore expedita consequatur libero animi
        quae velit nobis voluptatum, et omnis. Ipsam impedit, deserunt pariatur
        ab numquam animi adipisci, culpa quia repellendus rem optio ullam
        temporibus, est cumque placeat? Atque dolore maxime amet incidunt quod,
        ullam voluptatibus laborum, harum dolor recusandae velit molestias? Non,
        nemo vitae. Dicta quas cumque praesentium maiores magni, distinctio
        nesciunt dolor doloribus rem consequuntur excepturi consequatur
        aspernatur earum nobis nihil iure ipsam autem laudantium doloremque ex
        at! Fuga libero voluptatibus voluptates consequuntur provident
        consequatur, nesciunt itaque. At natus a fuga atque culpa officia
        necessitatibus eaque soluta eligendi omnis esse assumenda, unde adipisci
        fugit cupiditate facere delectus id maiores est vero sed in architecto
        aspernatur consequatur. Debitis eius numquam magnam veritatis in
        expedita quia, natus cum impedit beatae iusto blanditiis reprehenderit
        ipsam illo distinctio laboriosam laudantium voluptates pariatur culpa
        rerum dolores? Consectetur suscipit labore optio dolor mollitia? Dolor
        accusantium qui natus sit quam, architecto aut molestias ea eos! Quas
        eaque ut fuga, dicta officiis ullam autem iure adipisci voluptate
        quibusdam fugit assumenda quo, consequatur magnam dolor tempore, rem
        reprehenderit numquam? Ipsum, eos reprehenderit! Ab facilis, labore
        voluptates perferendis dignissimos nesciunt veritatis eaque magni
        eveniet? Beatae maiores, vitae illo velit tenetur ducimus itaque. Sed
        nobis libero voluptate facere accusamus modi, magnam impedit excepturi,
        exercitationem a eum tempore repellendus? Placeat natus ducimus
        molestias totam. Perspiciatis ut fuga, repellendus eos, excepturi minima
        recusandae eveniet impedit nihil, animi atque hic sapiente doloremque
        velit beatae ab aliquam vel ipsa! Mollitia molestiae maiores numquam!
        Veniam pariatur doloribus dicta repellat voluptas totam minus eos ab
        corrupti doloremque odio aperiam iusto repellendus tenetur nisi, ad
        obcaecati eum eligendi. Vitae aspernatur quas accusantium quasi
        consectetur quos quae voluptate aliquam neque ea dolores nisi earum qui
        quibusdam tenetur ducimus, officiis autem ratione modi cumque, excepturi
        suscipit perferendis itaque. Necessitatibus voluptates optio sit ex
        illum libero amet maiores. Voluptate unde quam deserunt itaque, eum
        alias! Numquam porro cum, cumque ex perspiciatis possimus ducimus
        eveniet quasi. Hic minima ratione nesciunt delectus, soluta explicabo at
        sunt ipsa aliquid numquam ut corrupti sapiente placeat officiis
        cupiditate esse sit perferendis. Cupiditate molestias eos quis sapiente,
        rem nobis eveniet quisquam? Aut molestias, autem cumque rem itaque
        commodi, exercitationem porro et ad odio, illum tenetur? Accusantium
        sequi vitae assumenda eius doloribus, ducimus, debitis enim perferendis
        hic tempora blanditiis, soluta repudiandae molestiae iure esse illum
        nulla eveniet quos deserunt pariatur voluptatem adipisci. Ipsa
        praesentium laudantium distinctio repellat tenetur facere quia
        dignissimos similique dolores odit quis hic reiciendis aperiam impedit
        veritatis non eum magni dolorem, fuga vel, corporis officiis nam quas
        voluptas. Reiciendis temporibus ipsum atque soluta nesciunt ipsa rem
        rerum sint laborum. Dolorum a mollitia facilis reiciendis. Rerum maxime
        expedita sit nemo, distinctio porro quidem dolore aliquam doloribus illo
        tenetur architecto laborum sint unde cumque dignissimos quas corporis
        amet? Velit tenetur sit illum molestias. Maxime quae ex aspernatur.
        Harum temporibus quasi quod nihil culpa ullam facere, autem voluptatem
        sapiente perspiciatis dolorum, tenetur vitae laudantium alias tempora
        amet impedit, aliquam voluptatibus dignissimos eum totam accusamus quas
        officia. Consequuntur laudantium necessitatibus quam labore, expedita
        corporis nesciunt cupiditate assumenda eos asperiores aperiam doloribus
        quae voluptatum, autem, quisquam velit voluptatibus voluptate ex illo!
        Sequi perferendis a ea autem libero itaque ipsam suscipit harum, quis ex
        ut voluptatibus molestiae vero deleniti expedita id nisi incidunt maxime
        accusantium nihil aliquid praesentium ab eligendi illum. Recusandae
        rerum laborum quae enim, doloremque, ut perferendis, debitis provident
        officiis minus consectetur maxime inventore natus. Rerum officiis,
        beatae dolorum consequuntur recusandae exercitationem atque placeat eos
        aliquam autem. Magni neque, saepe, in architecto sunt adipisci incidunt
        iste asperiores consectetur quos officiis quisquam! Vitae explicabo
        fugiat corrupti id dicta? Sint pariatur eum, aut, laboriosam asperiores
        voluptatem deleniti accusantium laudantium possimus quos velit quo quis!
        Commodi quo magnam eius modi eligendi corporis cum, quisquam, accusamus
        natus autem sunt quia vitae necessitatibus beatae iusto maxime
        voluptatum perspiciatis porro error praesentium quaerat deserunt
        doloribus libero. Impedit neque atque animi recusandae. Ab sed tempore
        ipsa quae at. Magni praesentium impedit consequatur vitae
        exercitationem! Non quam esse cum quia assumenda commodi iure! Minima
        cum similique, voluptate iure animi laboriosam excepturi consequuntur
        aperiam quibusdam. Mollitia laborum quaerat ea assumenda accusantium
        necessitatibus id ex dolore commodi deserunt totam, quidem voluptatibus
        sed esse reiciendis perferendis ad quae. Hic aliquam nobis officia
        commodi aspernatur cupiditate tempora ab nihil minima, distinctio
        perspiciatis fugit at praesentium repellat illum accusamus? Porro
        necessitatibus cumque voluptatibus itaque facilis dolorem esse quidem
        perspiciatis, ad voluptatum facere voluptas nemo libero, dolorum
        recusandae laborum vero praesentium minima tempore unde totam ipsum.
        Repellat iste animi amet hic deleniti, error maxime unde qui nesciunt,
        quisquam sit repellendus laudantium totam consectetur iusto ex tenetur,
        deserunt a. Quasi voluptate cupiditate soluta ullam ad dolore! Illo
        recusandae reiciendis quos assumenda non quod possimus autem, aliquam
        saepe deleniti distinctio, eos necessitatibus tenetur. Doloribus, dolore
        necessitatibus. Iure vero, laboriosam aliquid veritatis voluptate nemo
        ab perferendis adipisci. Architecto nam doloremque eum quaerat non nulla
        suscipit molestias, soluta, voluptatum natus, fugiat qui. Ipsa sit, quis
        eveniet vero eligendi labore perferendis repellat expedita nisi,
        necessitatibus quaerat inventore laborum commodi, quam soluta ullam
        libero. Reprehenderit, nobis asperiores quasi eos dolorem blanditiis
        aliquam ipsum iste dolorum inventore praesentium sed. Adipisci non
        tempora maiores. Deleniti laudantium amet praesentium vero modi et iste
        ut officia itaque quos minus, vitae dolorem quasi? Quisquam nemo veniam
        quis officiis, fugiat inventore obcaecati, commodi dicta labore in
        dolorem. Sint ad illo voluptate cupiditate, error dignissimos iure
        doloremque sunt placeat corrupti. Veritatis labore quaerat fuga, non
        beatae veniam magni laudantium vitae deserunt ipsa, sit nobis reiciendis
        quo atque aspernatur! Ducimus repellat laboriosam dolor veniam, numquam
        rem iure suscipit eum doloremque maiores aliquam adipisci molestias
        perspiciatis quasi iusto deserunt laborum fugiat dolore corporis velit
        neque nisi. Pariatur in nam dolor maiores nihil ipsum praesentium,
        magnam eveniet sapiente necessitatibus vitae soluta dolorem dolorum.
        Ullam consectetur cupiditate quod iure consequuntur neque beatae harum
        delectus rem nihil culpa alias quo voluptates debitis optio sint
        tempore, aliquid exercitationem ea doloremque laudantium vel nisi
        placeat. Similique tempora ad possimus delectus minima. In, sint
        sapiente dolor sunt placeat enim nulla cupiditate exercitationem nemo,
        excepturi dolores ullam. Exercitationem voluptate repellat incidunt
        nulla eius nisi, vero et magni provident? Impedit dolorum eveniet neque
        ducimus soluta, quo possimus magnam veniam excepturi doloremque ipsum,
        eius debitis vel delectus similique officiis! Vitae alias et odio
        veritatis libero, nobis obcaecati iste voluptas dolore velit culpa iusto
        at. A in non quasi obcaecati impedit ad facere laboriosam, veritatis
        debitis adipisci magnam culpa voluptatum atque doloribus doloremque
        possimus inventore asperiores quibusdam deserunt enim. Aspernatur iusto
        corporis, dolorum ullam sunt repudiandae debitis nulla. Iste excepturi
        commodi sequi voluptates iure, possimus corporis fuga, harum pariatur
        beatae vero ut voluptatum facilis cumque totam quas mollitia eveniet
        debitis blanditiis! Nulla eligendi soluta inventore veniam odio possimus
        error incidunt dolores quis odit, illum sed illo minima accusantium ex
        molestias deserunt voluptate facere! Iste est, nostrum doloribus
        similique amet nobis saepe. Neque iste eveniet rerum cupiditate
        laudantium autem voluptatum ipsa quas vero dicta, amet qui voluptatibus
        illum sint aperiam reprehenderit itaque! Corrupti, ducimus facere
        adipisci eaque laboriosam nam quaerat voluptate quae voluptatibus
        explicabo quas reiciendis quisquam veniam expedita. Porro praesentium
        placeat deleniti dolores maiores odio quaerat voluptate nemo, sit
        officia neque sapiente magni ducimus earum, tempora repellat corrupti
        accusamus! Velit alias saepe reprehenderit ratione placeat delectus
        quisquam accusamus, temporibus quis sed, ducimus tenetur ullam magnam.
        Architecto qui harum itaque impedit quaerat. Aperiam qui quisquam
        voluptatibus ea? Quae mollitia harum natus nulla corporis suscipit a cum
        perspiciatis assumenda necessitatibus ipsa ex optio unde sed laboriosam
        blanditiis culpa reprehenderit ipsum beatae, soluta ullam quasi,
        expedita dicta? Id sapiente optio, provident quasi quidem eos adipisci
        autem dolorum omnis molestiae doloribus sit, et maiores ea, nesciunt
        similique aperiam corrupti fugit repellendus? Illum maxime obcaecati,
        animi tenetur eos totam. Sint iure omnis velit aspernatur quibusdam
        eveniet, in dicta inventore vitae, pariatur illo. Illo modi esse ad
        nihil asperiores fugit suscipit, mollitia voluptatem at minus facere
        enim rem commodi deleniti fugiat placeat aut eius voluptas? Id ut
        dolorum distinctio, eum veniam quo odit sit est repellendus sequi,
        quisquam quis quam consequuntur vero error praesentium quas officia odio
        illo consectetur similique ab? Corrupti nisi accusamus tempora ullam
        quasi ipsa molestiae illum cum et, repellat quis eveniet sequi optio
        fuga eius atque quaerat quo. Maxime, ex adipisci minima porro, ipsam
        quae aliquam iste aperiam debitis architecto nemo ullam quo dolorum
        reiciendis. Omnis consequatur vero aut dolor obcaecati, est nobis
        perferendis sed sequi dignissimos voluptatibus praesentium fugit non
        ipsam id! Omnis officia quam maxime accusantium, ipsam praesentium magni
        aspernatur ducimus esse magnam ea quibusdam deserunt. Repellendus
        dolores vero esse autem natus labore officiis omnis quasi dolore
        recusandae, nesciunt cum? Odio sapiente ut tenetur accusamus in, modi
        quam a ea aperiam dolor dolorem tempore, possimus deleniti nobis
        officiis! Harum similique voluptatibus placeat nulla, provident illum
        ipsam fuga beatae vitae possimus odio suscipit sed eaque eveniet libero
        iusto voluptates quod labore, quas optio iure unde? Quos blanditiis
        similique optio reiciendis ullam molestiae cum, quis ducimus nisi
        labore, consequuntur est soluta illum tempora, doloremque itaque non
        nesciunt saepe minus necessitatibus ex! Voluptatum, modi distinctio
        ullam unde neque quisquam excepturi impedit quae harum eum sit corporis
        assumenda dignissimos fuga sunt alias illum doloribus voluptatem,
        aliquid quia! Id sunt facilis odio soluta, accusamus vel voluptatum aut
        deserunt rerum laborum placeat adipisci doloribus! Deserunt, quisquam
        molestiae.
      </p>
    </>
  );
}
