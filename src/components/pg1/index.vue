<template>
	<div>
		<div class="banner">
			<el-carousel trigger="click" height="auto" autoplay>
				<el-carousel-item class="img" v-for="(item, index) in bannerList" :key="index">
					<img wh-full :src="item.img" alt="" class="">
					<div class="info animate__animated animate__fadeInDown">
						<li class="title">{{ item.txt }} </li>
						<li class="msg text-wrap">{{ item.msg }}</li>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="content">
			<div class="box1">
				<li class="title text-8">C-SUITE 使命与方针</li>
				<li class="msg text-wrap">我们的目标是通过丰富的市场知识、密切的合作伙伴关系和快速的响应速度颠覆传统的招聘方式为我们的客户提供卓越、及时和定制化的解决方案。</li>
			</div>
			<div class="box2">
				<div class="card" v-for="item in 4" :key="item">
					<img src="@/assets/home/vector.png" alt="" class="icon">
					<li>方案定制</li>
				</div>
			</div>
			<div class="bg1">
				<div class="box1">
					<li class="title">为什么选我们</li>
					<div class="btn">
						<div class="btn-item">
							<li>
								我们的优势
							</li>
							<el-icon>
								<Right />
							</el-icon>
						</div>
						<div class="btn-item">
							<li>
								我们的优势
							</li>
							<el-icon>
								<Right />
							</el-icon>
						</div>
						<div class="btn-item">
							<li>
								我们的优势
							</li>
							<el-icon>
								<Right />
							</el-icon>
						</div>
					</div>
				</div>
			</div>
			<div class="bg2">
				<li class="title">团队成员</li>
				<div class="card">
					<!-- <div class="card-info"> -->
					<div class="card-box" v-for="(item, index) in teamList" :key="index">
						<img class="img" :src="item.img" alt="">
						<div class="info">
							<div class="space-y-2">
								<li>{{ item.name }}</li>
								<li>{{ item.Ename }}</li>
								<li class="line"></li>
							</div>
							<li class="more">{{ item.more }}</li>
						</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
			<div class="bg3">
				<li class="title">CSUITE 地址</li>
				<li class="address">上海市闵行区程家桥路168弄39号，308室</li>
				<img class="img" src="@/assets/home/map.png" alt="">
				<div class="card">
					<div class="item" v-for="(item, index) in areaList" :key="index">
						<li class="name">{{ item.name }}</li>
						<li class="address-item">{{ item.address }}</li>
						<li class="msg">{{ item.msg }}</li>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue';

const active = ref(0)
const timer = ref()
const bannerList = [
	{
		img: `/img/home/banner1.png`,
		txt: '我们是谁',
		msg: '作为一家现代招聘服务企业，CSUITE EXECUTIVE旨在针对如今挑战重重的中国市场环境提出解决方案'
	},
	{
		img: `/img/home/banner2.png`,
		txt: '我们是谁',
		msg: '我们致力提供足可媲美全球顶尖的五大高端招聘公司的服务规格，而服务方式更为灵活，更加个性化，更贴合客户的特定需求。'
	},
	{
		img: `/img/home/banner3.png`,
		txt: '我们是谁',
		msg: '我们的服务主打专业、充满热情的小型资深顾问团队，以客户的长期战略为重，围绕长期发展策略而发掘合适的人才资源，并且符合客户的当下需求，而非只是从现成的人才库中做简单筛选。'
	},
	{
		img: `/img/home/banner4.png`,
		txt: '我们是谁',
		msg: '我们以客户为中心，注重与重点客户建立长期稳固的合作关系，提供人才招聘、人才管理与市场调研工作等全方位服务。'
	},
	{
		img: `/img/home/banner5.png`,
		txt: '我们是谁',
		msg: '用热情、坚持和创造力将不可能变为可能，CSUITE EXECUTIVE以在每一个环节为客户创造更多价值而自豪。'
	},
	{
		img: `/img/home/banner5.png`,
		txt: '我们是谁',
		msg: '用热情、坚持和创造力将不可能变为可能，CSUITE EXECUTIVE以在每一个环节为客户创造更多价值而自豪。'
	},
	{
		img: `/img/home/banner5.png`,
		txt: '我们是谁',
		msg: '用热情、坚持和创造力将不可能变为可能，CSUITE EXECUTIVE以在每一个环节为客户创造更多价值而自豪。'
	}
]

const teamList = [
	{
		img: `/src/assets/home/person1.png`,
		name: '吴婷婷',
		Ename: 'TING TING BIO',
		more: 'CSUITE 的执行合伙人兼首席执行官，同时也是 SM² Consulting 咨询委员会的成员。TingTing 拥有超过15年的人才招聘经验。'
	},
	{
		img: `/src/assets/home/person2.png`,
		name: '吴婷婷',
		Ename: 'TING TING BIO',
		more: 'CSUITE 的执行合伙人兼首席执行官，同时也是 SM² Consulting 咨询委员会的成员。TingTing 拥有超过15年的人才招聘经验。'
	},
	{
		img: `/src/assets/home/person1.png`,
		name: '吴婷婷',
		Ename: 'TING TING BIO',
		more: 'CSUITE 的执行合伙人兼首席执行官，同时也是 SM² Consulting 咨询委员会的成员。TingTing 拥有超过15年的人才招聘经验。'
	},
	{
		img: `/src/assets/home/person2.png`,
		name: '吴婷婷',
		Ename: 'TING TING BIO',
		more: 'CSUITE 的执行合伙人兼首席执行官，同时也是 SM² Consulting 咨询委员会的成员。TingTing 拥有超过15年的人才招聘经验。'
	}
]

const areaList = [
	{
		name: '01 中国办事处',
		address: '上海市闵行区程家桥路168弄39号，308室',
		msg: '邮编 201103'
	},
	{
		name: '02 中国办事处',
		address: '上海市闵行区程家桥路168弄39号，308室',
		msg: '邮编 201103'
	},
	{
		name: '03 中国办事处',
		address: '上海市闵行区程家桥路168弄39号，308室',
		msg: '邮编 201103'
	},
	{
		name: '04 中国办事处',
		address: '上海市闵行区程家桥路168弄39号，308室',
		msg: '邮编 201103'
	},
	{
		name: '05 中国办事处',
		address: '上海市闵行区程家桥路168弄39号，308室',
		msg: '邮编 201103'
	},
	{
		name: '06 中国办事处',
		address: '上海市闵行区程家桥路168弄39号，308室',
		msg: '邮编 201103'
	}
]
// const B = computed(() => { A.value * 2; });

// watch(A, (Old, New) => { console.log('old,New', Old, New) }, { immediate: true, deep: true });

onMounted(() => {
	// timer.value = setInterval(() => {
	// 	active.value < 5 ? active.value++ : active.value = 0
	// 	console.log(active.value)
	// }, 2000)
});
onUnmounted(() => {
	timer.value = null
})

</script>
<style lang='scss' scoped>
.banner {
	margin-bottom: 35px;

	.img {
		height: 640px;
	}

	.info {
		color: #fff;
		position: absolute;
		top: 38%;
		left: 50px;


		.title {
			font-size: 48px;
			font-weight: 600;
			line-height: 64px;
		}

		.msg {
			width: 400px;
			margin-top: 16px;
			font-size: 20px;
			font-weight: 400;
			line-height: 32px;
			letter-spacing: 0em;
			text-align: left;
		}

		// ::v-deep .el-carousel__indicators--horizontal {
		// 	position: absolute;
		// 	bottom: 5px;
		// 	left: 20%;
		// 	text-align: right;

		// 	.el-carousel__indicator--horizontal button {
		// 		width: 6px;
		// 		height: 6px;
		// 		background: #ffffff;
		// 		border-radius: 50%;
		// 		opacity: 0.5;
		// 	}

		// 	.el-carousel__indicator--horizontal.is-active button {
		// 		width: 14px;
		// 		height: 6px;
		// 		background: #ffffff;
		// 		opacity: 1;
		// 		border-radius: 10px;
		// 	}
		// }
	}
}

.content {
	width: 1312px;
	height: 100%;
	margin: 0 auto;

	.box1 {
		padding-top: 64px;

		.title {
			height: 64px;
			font-size: 48px;
			font-weight: 600;
			line-height: 32px;
			letter-spacing: 0em;
			text-align: left;
		}

		.msg {
			width: 640px;
			font-size: 20px;
			font-weight: 400;
			line-height: 26px;
			letter-spacing: 0em;
			text-align: left;
		}
	}

	.box2 {
		padding: 64px 0;
		display: flex;
		justify-content: space-between;

		.card {
			width: 316px;
			height: 337px;
			border: 1px solid #B0A7A7;
			padding: 32px;
			margin: 0 12px;
			padding-top: 56px;
			border-radius: 12px;
			font-size: 28px;
			line-height: 36px;
			align-items: center;
			transition: all 0.5s;

			&:hover {
				color: #fff;
				width: 512px;
				background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
			}

			.icon {
				width: 112px;
				height: 122px;
			}
		}
	}

	.bg1 {
		width: 100%;
		height: 100%;
		margin-bottom: 40px;
		border-radius: 12px;
		background-image: url('@/assets/home/bg1-1.jpeg');
		background-repeat: no-repeat center;
		background-size: 100% 100%;

		.box1 {
			position: relative;
			color: #fff;
			padding: 140px 40px 40px 40px;
			height: 640px;
			width: 100%;
			border-radius: 12px;
			background: linear-gradient(90deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0) 68.22%),
				linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

			.title {
				margin-top: 64px;
				height: 64px;
				font-size: 50px;
				font-weight: 600;
				line-height: 64px;
				letter-spacing: 0em;
				text-align: left;
			}

			.btn {
				width: 100%;
				margin-top: 18%;
				border-radius: 8px;
				display: flex;
				justify-content: space-between;

				.btn-item {
					cursor: pointer;
					width: 396px;
					height: 112px;
					padding: 20px;
					line-height: 112px;
					font-size: 24px;
					font-weight: 500;
					display: flex;
					justify-content: space-between;
					text-align: center;
					align-items: center;
					border-radius: 8px;
					border: 1px solid #fff;

					&:hover {
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
					}
				}
			}
		}
	}

	.bg2 {
		height: 100%;
		padding-bottom: 64px;

		.title {
			padding: 64px 0;
			font-size: 50px;
			font-weight: 600;
			line-height: 64px;
			letter-spacing: 0em;
			text-align: left;
		}

		.card {
			width: auto;
			height: 700px;
			overflow-x: scroll;
			overflow-y: hidden;
			display: flex;

			.card-box {
				position: relative;
				text-align: center;
				flex: 0 0 auto;
				width: 648px;
				height: 679px;
				margin-right: 16px;
				border-radius: 12px;
				border: 1px solid #B0A7A7;

				&:hover {
					box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
				}

				.img {
					width: auto;
					height: 360px;
					overflow: hidden;
				}

				.info {
					text-align: left;
					font-size: 24px;
					font-weight: 600;
					line-height: 40px;
					padding: 48px;

					.line {
						width: 28px;
						height: 3px;
						border-radius: 8px;
						background: #E30214;
					}

					.more {
						font-size: 20px;
						line-height: 26px;
						font-weight: 400;
						margin-top: 56px;
						width: auto;
						text-wrap: wrap;
					}
				}
			}

			// }

		}
	}

	.bg3 {
		height: 100%;

		.title {
			font-size: 50px;
			font-weight: 600;
			line-height: 64px;
			letter-spacing: 0em;
			text-align: left;
		}

		.address {
			font-size: 20px;
			line-height: 26px;
			font-weight: 400;
			margin-top: 20px;
			width: auto;
			padding-bottom: 40px;
		}

		.card {
			margin-top: 12px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.item {
				flex: 0 0 auto;
				width: 426px;
				height: 179px;
				padding: 24px 32px;
				margin: 8px 0;
				border-radius: 8px;
				font-size: 20px;
				line-height: 26px;
				text-wrap: wrap;
				border: 1px solid #B0A7A7;

				&:hover {
					color: #fff;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
				}

				.name {
					font-size: 28px;
					font-weight: 500;
					line-height: 36px;
					margin-bottom: 12px;
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.banner {
		width: 358px;
		height: 240px;
		margin: 0 auto;

		.img {
			height: 240px;
			border-radius: 12px;
		}

		.info {
			color: #fff;
			position: absolute;
			top: 38%;
			left: 50px;

			.title {
				font-size: 18px;
				font-weight: 600;
				line-height: 24px;
			}

			.msg {
				width: 240px;
				margin-top: 16px;
				font-size: 12px;
				font-weight: 400;
				line-height: 16px;
				letter-spacing: 0em;
				text-align: left;
			}
		}
	}

	.content {
		width: 358px;
		height: 100%;
		margin: 0 auto;

		.box1 {
			padding-top: 40px;

			.title {
				height: 32px;
				font-size: 16px;
				font-weight: 600;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.msg {
				width: auto;
				font-size: 12px;
				font-weight: 400;
				line-height: 16px;
				letter-spacing: 0em;
				text-align: left;
			}
		}

		.box2 {
			padding: 24px 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.card {
				width: 173px;
				height: 137px;
				border: 1px solid #B0A7A7;
				padding: 16px;
				border-radius: 12px;
				font-size: 16px;
				line-height: 40px;
				transition: all 0.5s;
				margin: 8px 0;

				&:hover {
					color: #fff;
					width: 173px;
					background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
				}

				.icon {
					width: 51px;
					height: 56px;
				}
			}
		}

		.bg1 {
			width: 100%;
			height: 100%;
			margin-bottom: 24px;
			border-radius: 12px;
			background-image: url('@/assets/home/bg1-1.jpeg');
			background-repeat: no-repeat;
			background-size: 100%;

			.box1 {
				position: relative;
				color: #fff;
				padding: 20px;
				height: 240px;
				width: auto;
				border-radius: 12px;
				background: linear-gradient(90deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0) 68.22%),
					linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

				.title {
					margin-top: 64px;
					height: 64px;
					font-size: 16px;
					font-weight: 600;
					line-height: 21px;
					letter-spacing: 0em;
					text-align: left;
				}

				.btn {
					width: 100%;
					margin-top: 14%;
					border-radius: 8px;
					display: flex;
					justify-content: space-between;

					.btn-item {
						cursor: pointer;
						width: 100px;
						height: 32px;
						padding: 10px 12px;
						line-height: 21px;
						font-size: 12px;
						font-weight: 500;
						display: flex;
						justify-content: space-between;
						text-align: center;
						align-items: center;
						border-radius: 8px;
						border: 1px solid #fff;

						&:hover {
							background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
						}
					}
				}
			}
		}

		.bg2 {
			height: 100%;
			padding-bottom: 24px;

			.title {
				padding: 12px 0;
				font-size: 16px;
				font-weight: 600;
				line-height: 21px;
				letter-spacing: 0em;
				text-align: left;
			}

			.card {
				width: auto;
				height: 310px;
				overflow-x: scroll;
				overflow-y: hidden;
				display: flex;

				.card-box {
					position: relative;
					text-align: center;
					flex: 0 0 auto;
					width: 240px;
					height: 298px;
					margin-right: 8px;
					border-radius: 12px;
					border: 1px solid #B0A7A7;

					&:hover {
						box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
					}

					.img {
						width: auto;
						height: 121px;
						overflow: hidden;
					}

					.info {
						text-align: left;
						font-size: 16px;
						font-weight: 600;
						line-height: 21px;
						padding: 12px;

						.line {
							width: 28px;
							height: 3px;
							border-radius: 8px;
							background: #E30214;
						}

						.more {
							font-size: 12px;
							line-height: 16px;
							font-weight: 400;
							margin-top: 16px;
							width: auto;
							text-wrap: wrap;
						}
					}
				}
			}
		}

		.bg3 {
			height: 100%;
			margin-bottom: 24px;

			.title {
				font-size: 16px;
				font-weight: 600;
				line-height: 12px;
				letter-spacing: 0em;
				text-align: left;
			}

			.address {
				font-size: 12px;
				line-height: 16px;
				font-weight: 400;
				margin-top: 12px;
				width: auto;
				padding-bottom: 12px;
			}

			.img {
				width: auto;
				height: 201px;
			}

			.card {
				margin-top: 12px;
				display: flex;
				flex-wrap: wrap;

				.item {
					flex: 0 0 auto;
					width: 173px;
					height: 137px;
					padding: 12px;
					margin: 8px 0;
					border-radius: 8px;
					font-size: 12px;
					line-height: 26px;
					text-wrap: wrap;
					border: 1px solid #B0A7A7;

					&:hover {
						color: #fff;
						background: linear-gradient(180deg, #E30214 0%, #F16B57 100%);
					}

					.name {
						font-size: 16px;
						font-weight: 500;
						line-height: 21px;
						margin-bottom: 8px;
					}
				}
			}
		}
	}
}
</style>