import { useState } from "react";

function SidebarHoc(WrappedElement: any) {
  function SideHoc(props: any) {
    const [toggle, settoggle] = useState(false);

    const close = () => {
      settoggle(false);
    };
    const open = () => {
      settoggle(true);
    };
    const change = () => {
      settoggle(!toggle);
    };

    return (
      <WrappedElement
        {...props}
        toggle={toggle}
        close={close}
        open={open}
        change={change}
      />
    );
  }
  return SideHoc;
}

export default SidebarHoc;
