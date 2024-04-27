<template>
	<div class="footer">
		<div class="cont">
			<div class="img">
				<img src="@/assets/footer/ma1.png" alt="">
				<img src="@/assets/footer/ma2.png" alt="">
			</div>
			<div class="conf">
				<li>{{ t('footer.conf1.txt1') }}</li>
				<li>{{ t('footer.conf1.txt2') }}</li>
				<li>{{ t('footer.conf1.txt3') }}</li>
				<li>{{ t('footer.conf1.txt4') }}</li>
				<li>{{ t('footer.conf1.txt5') }}</li>
				<li>{{ t('footer.conf1.txt6') }}</li>
			</div>
			<div class="conf">
				<li>{{ t('footer.conf2.txt1') }}</li>
				<li>{{ t('footer.conf2.txt2') }}</li>
				<li>{{ t('footer.conf2.txt3') }}</li>
				<li>{{ t('footer.conf2.txt4') }}</li>
			</div>
			<div class="conf">
				<li>网站备案信息</li>
				<li>网站备案信息</li>
				<li>网站备案信息</li>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

onMounted(() => { });

</script>
<style lang='scss' scoped>
.footer {
	color: #fff;
	margin-top: 64px;
	width: 100%;
	height: 230px;
	background: #231C1E;

	.cont {
		width: 1312px;
		height: 100%;
		margin: 0 auto;
		padding: 36px 0;
		display: flex;
		justify-content: space-between;

		.img {
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			img {
				width: 64px;
				height: 64px;
			}
		}

		.conf {
			text-align: left;
			width: 25%;
			font-size: 12px;
			line-height: 24px;
		}
	}
}

@media (max-width: 576px) {
	.footer {
		color: #fff;
		margin-top: 24px;
		width: 100%;
		height: 560px;
		background: #231C1E;
		text-align: -webkit-center;


		.cont {
			width: 358px;
			height: 100%;
			margin: 0 auto;
			padding: 24px;
			display: block;

			.img {
				width: 180px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 32px;

				img {
					width: 79px;
					height: 79px;
				}
			}

			.conf {
				text-align: left;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				text-align: -webkit-center;
				margin: 12px;
			}
		}
	}
}
</style>