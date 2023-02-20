import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <>
      <Layout
          title={'Nosotros'}
          description={'Sobre nosotros, guiatarLA, tienda de musica'}
      >

      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p> Sed pretium ex nisi, bibendum varius risus elementum non. Mauris a eleifend arcu. Sed feugiat erat a turpis interdum finibus. Maecenas aliquam, sapien quis ullamcorper consequat, elit felis sollicitudin erat, id placerat nisl tellus sit amet nulla. Quisque gravida viverra risus, at maximus quam hendrerit ut. In quam lacus, placerat non mattis ut, porttitor vitae orci. Phasellus semper luctus viverra. Sed varius felis mauris, id malesuada justo efficitur in. Vivamus orci libero, vehicula eu fermentum nec, interdum et orci. Aenean posuere malesuada magna, non suscipit nulla condimentum sit amet.</p>

            <p>Pellentesque lacinia tincidunt  vestibulum. Nunc cursus odio in ex fermentum porta. Ut dolor libero, sollicitudin at faucibus non, convallis a ligula. Phasellus at nisi egestas, euismod eros vitae, iaculis est. Vestibulum ultricies in orci at tincidunt. Suspendisse condimentum mi in varius tempus. Nunc ac convallis urna. </p>
          </div>
        </div>
        
      </main>

      </Layout>
    </>
      )
}
