<script>
	import viewport from './useViewportAction';
	import lazyimage from './lazyimage';	
	export let before_image;
	export let after_image;
	function handleInput(e) {
    const container = e.target.parentElement;
		container.style.setProperty('--position', `${e.target.value}%`);
		console.log(e.target.value);
	}
</script>

<beforeafter>
	<main>
		<div class="container" on:input={handleInput}>
			<div class="image-container">
				<img use:lazyimage class="image-before slider-image" data-src={before_image} alt="" />
				<img use:lazyimage class="image-after slider-image" data-src={after_image} alt="" />
			</div>
			<input type="range" min="0" max="100" value="50" class="slider" />
			<div class="slider-line"></div>
			<div class="slider-button">
				<embed src="slider-button.svg" />
			</div>
		</div>
	</main>
</beforeafter>

<style>
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	img {
		display: block;
		max-width: 100%;
	}

	main {
		display: grid;
		place-items: center;
		padding: 10px;
	}

	.container {
		display: grid;
		place-content: center;
		position: relative;
		overflow: hidden;
		border-radius: 1rem;
		--position: 50%;
	}

	.image-container {
		max-width: 800px;
		max-height: 90vh;
		aspect-ratio: 1/1;
	}

	.slider-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left;
	}

	.image-before {
		position: absolute;
		inset: 0;
		width: var(--position);
	}

	.slider {
		position: absolute;
		inset: 0;
		cursor: pointer;
		opacity: 0;
		/* For Firefox */
		width: 100%;
		height: 100%;
	}

	.slider:focus-visible ~ .slider-button {
		outline: 5px solid black;
		outline-offset: 3px;
	}

	.slider-line {
		position: absolute;
		inset: 0;
		width: 0.2rem;
		height: 100%;
		background-color: #fff;
		z-index: 10;
		left: var(--position);
		transform: translateX(-50%);
		pointer-events: none;
	}

	.slider-button {
		position: absolute;
		background-color: #fff;
		color: black;
		padding: 0.5rem;
		border-radius: 100vw;
		display: grid;
		place-items: center;
		top: 50%;
		left: var(--position);
		transform: translate(-50%, -50%);
		pointer-events: none;
		z-index: 100;
		box-shadow: 3px 3px 3px hsl(0, 50%, 2%, 0.5);
	}
</style>
