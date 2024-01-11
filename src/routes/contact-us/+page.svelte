<div class="text-center">
	<h1 class="text-3xl font-bold">Contact Us</h1>
	<div class="flex text-center lg:flex-row xs:flex-col">
		<div class="align-middle w-[45%]">
			<div
				class="form-box border-4 border-b-gray-400 border-r-gray-400 border-t-blue-400 border-l-blue-400 px-10 pt-10 text-lg h-[40vh] mx-[10%]"
			>
				<form>
					<div class="flex flex-row">
						<div class="grid grid-cols-2">
							<label for="name">Name: </label><br />
							<input type="text" name="name" id="name" />
						</div>
						<div class="grid grid-cols-2">
							<label for="company-name">Company Name: </label><br />
							<input type="text" name="company-name" id="company-name" />
						</div>
					</div>
				</form>
			</div>
		</div>
		<div>info</div>
	</div>
</div>

<style>
	input {
		@apply w-60 h-10 border-gray-500 border-2;
	}
	input:focus {
		@apply w-60 h-10 border-gray-500 border-0;
	}
	label {
		@apply text-lg w-auto text-left;
	}
	.form-box {
		box-shadow: 10px 10px 20px rgba(30, 30, 30, 0.2);
	}
</style>
