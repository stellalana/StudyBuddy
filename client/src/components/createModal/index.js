import ReactModal from 'react-modal';

<ReactModal
isOpen={false}
onAfterOpen={handleAfterOpenFunc}
onRequestClose={handleRequestCloseFunc}
closeTimeoutMS={0}
style={{ overlay: {}, content: {} }}
contentLabel="Create a New Card"
portalClassName="ReactModalPortal"
overlayClassName="ReactModal_Overlay"
className="ReactModal_Content"
bodyOpenClassName="ReactModal_Body--open"
htmlOpenClassName="ReactModal_Html--open"
ariaHideApp={true}
shouldFocusAfterRender={true}
shouldCloseOnOverlayClick={true}
shouldCloseOnEsc={true}
shouldReturnFocusAfterClose={true}
role="dialog"
parentSelector={() => document.body}
// optional
aria={{
    labelledby: "heading",
    describedby: "full_description"
  }}
data={{
    background: "green"
    }}
//
overlayRef={setOverlayRef}
contentRef={setContentRef}
/>
function getParent() {
    return document.querySelector('#root');
  }
  
  <Modal
    ...
    parentSelector={getParent}
    ...
  >
    <p>Modal Content.</p>
  </Modal>

<Modal
...
overlayRef={node => this.overlayRef = node}
contentRef={node => this.contentRef = node}
...
>
<p>Modal Content.</p>
</Modal>