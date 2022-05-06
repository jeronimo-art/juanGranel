import { Collapse } from "@nextui-org/react";
import ReactPlayer from "react-player";

const ErrorMsg = () => {
  return (
    <>
      <div>
        <Collapse.Group accordion={false}>
          <Collapse title="Option A">
            <ReactPlayer url="https://www.youtube.com/watch?v=3xrko3GpYoU&t" />
          </Collapse>
          <Collapse title="Option B">
            <iframe
              src="https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fullscreen=0"
              allowFullScreen="true"
              allow="fullscreen"
              width="560"
              height="315"
              frameBorder="0"
            ></iframe>
          </Collapse>
          <Collapse title="Option C"></Collapse>
        </Collapse.Group>
      </div>
    </>
  );
};

export default ErrorMsg;
