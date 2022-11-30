# modal-pkg

A modal component for your react app

## Install modal-pkg

npm install modal-pkg
or
yarn add modal-pkg

## Use Modal

### Import component :
import Modal from 'modal.pkg

### Define an useState :
const [modalIsShowing, setModalIsShowing] = useState(false)

### Define a unction to close Modal :
const closeModal = () => {
    setModalIsShowing(false)
}

### Use props of the Modal component :
<Modal
    message="your message"
    onClose={closeModal}
    isShowing={modalIsShowing}
/>

### Define modalIsShowing at true to display the modal (onClick for example):
setModalIsShowing(true)