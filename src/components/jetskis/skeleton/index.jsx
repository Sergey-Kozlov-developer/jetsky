import ContentLoader from "react-content-loader";

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={296}
		height={410}
		viewBox="0 0 296 410"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="55" y="32" rx="0" ry="0" width="312" height="208" />
		<rect x="59" y="265" rx="0" ry="0" width="250" height="73" />
		<rect x="62" y="358" rx="0" ry="0" width="237" height="33" />
	</ContentLoader>
);

export default Skeleton;
