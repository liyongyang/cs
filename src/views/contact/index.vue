<template>
	<div class="my-container">
		<li class="com-name animate__animated animate__fadeInDown">{{ conf.name }}</li>
		<div class="info wow animate__fadeInUp" v-for="(item, index) in conf.msg" :key="index">
			<li class="msg" v-for="(t, idx) in item" :key="idx">{{ t }}</li>
		</div>
		<div class="cards wow animate__fadeInUp">
			<img src="/img/icon-wx1.png" alt="">
			<img src="/img/icon-wx2.png" alt="">
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const conf = {
	name: '璞偌芳德商务咨询有限公司',
	msg: [
		[
			t('footer.conf1.txt2'),
			t('footer.conf1.txt3'),
			t('footer.conf1.txt4'),
			t('footer.conf1.txt5'),
			t('footer.conf1.txt6'),
		],
		[
			t('footer.conf2.txt1'),
			t('footer.conf2.txt2'),
			t('footer.conf2.txt3'),
			t('footer.conf2.txt4'),

		]
	]
}

onMounted(() => { });

</script>
<style lang='scss' scoped>
.my-container {
	width: 1312px;
	margin: 0 auto;
	text-align: center;

	.com-name {
		margin-top: 24px;
		font-size: 48px;
		font-weight: 500;
		line-height: 60px;
	}

	.info {
		margin-top: 16px;
		margin-bottom: 32px;

		.msg {
			font-size: 20px;
			line-height: 30px;
		}
	}

	.cards {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 1312px;
		height: 339px;
		background-color: #F9F9F9;

		>* {
			width: 240px;
			height: 240px;
		}
	}
}

@media (max-width: 576px) {
	.my-container {
		width: 358px;
		margin: 0 auto;
		text-align: center;
		transition: all 0.5s;

		.com-name {
			font-size: 20px;
			font-weight: 500;
			line-height: 28px;
		}

		.info {
			margin: 24px 0;

			.msg {
				font-size: 16px;
				line-height: 22px;
			}
		}

		.cards {
			display: block;
			align-items: center;
			justify-content: space-around;
			width: 358px;
			height: auto;
			background-color: #ffffff;

			>* {
				width: 140px;
				height: 140px;
			}
		}
	}
}
</style>
