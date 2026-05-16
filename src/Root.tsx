import {Composition} from 'remotion';
import {AICourseVideo} from './AICourseVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AILiteracyCourse"
        component={AICourseVideo}
        durationInFrames={1320}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
