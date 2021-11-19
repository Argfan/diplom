<template>
	<div>
		<div class="container-fluid p-h-0 p-v-20 bg full-height d-flex" :style="{'background-image': 'url('+ require('../assets/images/others/login-3.png')+')'}">
			<div class="d-flex flex-column justify-content-between w-100">
				<div class="container d-flex h-100">
					<div class="row align-items-center w-100">
						<div class="col-md-7 col-lg-5 m-h-auto">
							<div class="card shadow-lg">
								<div class="card-body">
									<div class="d-flex align-items-center justify-content-between m-b-30">
										<img class="img-fluid" alt="" src="../assets/images/logo/Coat_of_Osh_65.png">
										<h2 class="m-b-0">Авторизация</h2>
									</div>
									<form action="list.html">
										<div class="form-group">
											<label class="font-weight-semibold" for="userName">Имя пользователя:</label>
											<div class="input-affix">
												<i class="prefix-icon anticon anticon-user"></i>
												<input type="text" class="form-control" id="userName" placeholder="Логин">
											</div>
										</div>
										<div class="form-group">
											<label class="font-weight-semibold" for="password">Пароль:</label>
											<!-- <a class="float-right font-size-13 text-muted" href="">Forget Password?</a> -->
											<div class="input-affix m-b-10">
												<i class="prefix-icon anticon anticon-lock"></i>
												<input type="password" class="form-control" id="password" placeholder="*****">
											</div>
										</div>
										<div class="form-group">
											<div class="d-flex align-items-center justify-content-center">

												<button type="submit" class="btn btn-primary">Вход</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Login'
	}
</script>

<style lang="scss" scoped>

</style>