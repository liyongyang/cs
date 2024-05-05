<template>
	<div class="qa-container">
		<div class="head wow animate__fadeInUp flex justify-between">
			<div class="icon_wrap" ref="backIconRef" @click="goBack">
				<el-icon class="icon-back cursor-pointer">
					<ArrowLeftBold />
				</el-icon>
				<span class="animate__animated animate__fadeIn">{{ t('common.return') }}</span>
			</div>
			<li class="flex-initial w-full text-center wow animate__fadeInUp">{{ pd.title }}</li>
		</div>
		<div class="content">
			<div class="cont wow animate__fadeInUp" v-for="(items, index) in pd.cont" :key="index">
				<img class="img" :src="items.img" alt="" srcset="">
				<div class="wow animate__fadeInUp" v-for="(item, i) in items.txt" :key="i">
					<li class="item-txt">{{ item }}</li>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { useRouter } from "vue-router";
const { t } = useI18n()
const router = useRouter();
const pd = {
	title: 'Csuite分享 | 创业: 走出舒适圈的征程',
	cont: [
		{
			img: '/article/art1-1.png',
			txt: [
				'我来自于一个简单的中国二线城市家庭，武汉是我的家乡。',
				'那个年代出国读书特别流行，于是我也“跟风”，后来去了到了英国留学，波兰工作，游历了世界各地。很幸运，这些经历让我成为了更加多元化的人，给予了我更多国际化的体验和更全面的世界观。大学毕业以后，我当时并不知道我要做什么，回想当时，我没有任何宏伟大计，也不知道生活会把我带到哪里。像你们某些人一样，在机缘巧合下通过朋友介绍得知了猎头这个行业，顺利地进入了一家大型国际招聘公司。在那里，我每天非常努力做好手上工作，全身心投入到工作。只为能够让自己成为一个“有备而来”的人，在机会来临时能够有能力抓住。'
			],
		},
		{
			img: '/article/art1-2.png',
			txt: [
				'工作数年后，我也做到了公司中国高管职位，个人业绩排名居于亚太区前五。尽管我获得了辛苦赚取的成功，但我后来意识到大型猎头公司在当今挑战和机会并存的市场，并没有办法真正以客户为中心，提供客户定制化的服务方案。于是，我开始产生了一些新的思考。对我来说，高薪并不等于成功，我觉得除了简历搬砖之外，我也希望能为企业提供真正的服务，能够不拘一格，抓住能力本质的按照潜力筛选人才，帮助创始人，CEO, 董事长通过关键一号人物招聘打开业务局面，从而帮助客户在内陆的业务增长，真正做到成为客户的业务发展伙伴。',
				'于是我决定成立CSUITE 公司。我依然记得当时做这个决策时的挣扎，纠结于这个决策会不会让我失去在大企业里稳定的收入和职业发展。如今回想起来我非常庆幸我最后选择了创立CSUITE, 因为这个决策让我生活充实，更有意义。'
			],
		},
		{
			img: '/article/art1-3.png',
			txt: [
				'作为一个初创企业，我深知，我们将目标定于超越市场上大部分的普通猎头公司，是一件非常有挑战的事情。三年前，和很多第一次创业的企业家一样，我并没有任何管理企业全方位的经验，但是我一直努力学习，驱动自己走出舒适区。',
				'过去几年里我结识了很多成功的创始人，企业家。他们包括霍尼韦尔全球CEO, 安姆科中国CEO，亨斯曼亚太CEO, 还有很多行业隐形冠军企业的创始人比如occhio CEO, 马斯特CEO，GTT MD。他们教会了我，坚持，果断，专注，更重要的是，让我学会更加关注身边的人与事，关心在座的每一位合作伙伴的成长。'
			],
		},
		{
			img: '/article/art1-4.png',
			txt: [
				'我认为，工作和生活是一体的。并且，工作也是可以不断地“丰富”我们的精神生活，赋予我们生活意义的。在每次陪客户、候选人吃饭聊天时，我都能感受到一种实现自我价值的快乐。我并没有觉得是在加班，而是在与客户候选人成为朋友的过程中“成交”生意。我相信在各位坚持不断提高自我的努力下，你们职业生涯将获得更长远的发展，让我们的公司实现我们的“攀登”目标。我相信你们和我一样，相信只有通过不断地学习和改变，才能够不断地挑战自己，超越自己，变成真正卓越的自己。',
			],
		},
		{
			img: '/article/art1-5.png',

			txt: [
				'过去三年，在疫情的笼罩下，全球经济受到了巨大挑战，中国亦不可避免地卷入其中。2022年对于招聘行业来说在是过去20年里是最艰难的一年，尤其是对像我们这样的初创公司来说更是草木皆兵。我们经历了封城、食物短缺、家人离世，病痛困恼等，对我们的身心或多或少造成了一些伤害，在年末时我们公司的离职率几乎达到了100%。但是这一切并没有击垮我们，我们并没有像其他公司一样走向崩塌。历经风雨，我们依然屹立不倒，坚持不懈。在去年如此艰巨的环境下，我们还是实现了利润增长，达到了几乎40%。我想，之所以能够获得这些成就，是因为在面对这些困难的时候，我们依然牢记着我们的初衷，谨记创立CSUITE的愿景，期待着彼岸花海。',
			],
		},
		{
			img: '/article/art1-6.png',

			txt: [
				'过去三年，我们也曾历经了无数成功与失败。而这些经历并不是没有价值的，它让我深刻地认识到“及时行乐”与“充实文化”是至关重要的。我想鼓励大家，陪伴大家，希望在座的各位能够与我一起踏上全新征途，以新姿态拥抱更好的未来。',
				'希望大家在遇到机会时能够及时抓住机会，在挑战与机遇面前不要思忖。等待机遇，同时也要抓住机遇，制造机遇。当你尝试着走出舒适区时，你往往会感到安全感的缺失，不确定性以及各种各样的阻力。',
				'所以，在这条路上你固然会感到不安与不适应。但没关系，别畏惧它。走出舒适区时往往是自身进步最快，提高最多的时候，是提升自我的最好方式。进步是它给我的答案，相信对你来说也会是同样的正向反馈。世界是不断发展变化着的，所以总会遇到一些你并不熟悉、并不擅长的事物。但别害怕，无论你遇到了什么，都要有信心，相信你所学到的技能能够帮助你渡过难关，成为更优秀的自己。',
				'我相信，春暖花开，成功就在彼岸。'
			],
		},
		{
			img: '/article/art1-7.png',
			txt: [
				'职业简介：',
				'Tingting是一位资深的人才服务行业合伙人，毕业于英国索尔福德大学，后就职于波兰多年后回国。多年的海外学习和生活让她对国际人文环境，全球化商业意识都有着丰富的经验。',
				'在创立C-Suite之前，Tingting曾作为跨国猎头公司的高级管理层，带领团队在整个亚洲市场做出非常优异的业绩。她成功推荐的候选人不光在客户公司稳定长久，而且业绩突出。',
				'凭借在猎头领域有着15多年的丰富经验，Tingting带领C - Suite Executive专注于中国市场，在工业领域资深管理及高管招聘方面颇有建树，行业涵盖了机械、自动化、化工、汽车，电气电子，包装，消费品等，更好地与国内外客户及高管级候选人建立稳固长期的战略伙伴关系，为客户提供长远、高效、高品质的服务与发展。',
				'近期一些有意思的成功案例：',
				"帮助Amcor、Trane、Isra Vision、Ardex、Victoria's Secret、Cimcool、Eaton、Unity、ISS、Hoffmann等跨国企业招聘到亚太或者中国区董事长人选，并从零开始搭建扩充国内团队，使企业成功迈入中国市场，并且一直发展壮大。",
				"关于我：",
				"创办C-Suite，旨为打造一流的人力资源服务供应商，成为客户专业且可靠的合作伙伴",
				"结果导向，不失细节",
				"寻求变革，鼓励创新",
				"追求卓越，前瞻思维",
				"喜爱运动，健身达人",
				"热爱生活，以饱满的能量面对工作与生活的每一天！"
			],
		}
	]
}

const goBack = () => {
	router.push('/joinUs')
}
</script>
<style lang='scss' scoped>
.qa-container {
	width: 1312px;
	margin: 0 auto;

	.head {
		display: flex;
		align-items: center;
		font-size: 48px;
		line-height: 63px;
		font-weight: 500;

		.icon_wrap {
			flex: 0 0 auto;
			height: 80px;
			width: 80px;
			cursor: pointer;
			background: #fff;
			text-align: center;
			border-radius: 100%;

			&:hover {
				box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

				span {
					margin-right: 6px;
					opacity: 1;
					display: inline;
				}
			}

			span {
				opacity: 0;
				display: none;
				position: relative;
				font-size: 18px;
				transition: all 0.5s ease-in-out;
			}

		}

		.icon-back {
			display: inline-block;
			font-size: 32px;
			vertical-align: sub;
		}
	}

	.content {
		color: #4C4143;
		width: auto;
		text-wrap: wrap;
		word-wrap: break-word;
		white-space: pre-wrap;

		.img {
			width: 1312px;
			margin: 40px auto;
		}

		.item-txt {
			font-size: 18px;
			line-height: 26px;
			margin-bottom: 20px;
		}
	}
}

@media (max-width: 576px) {
	.qa-container {
		position: relative;
		width: 358px;
		margin: 0 auto;

		.head {
			display: flex;
			align-items: center;
			font-size: 16px;
			line-height: 40px;
			font-weight: 500;

			.icon_wrap {
				flex: 0 0 auto;
				height: 40px;
				width: 40px;
				cursor: pointer;
				background: #fff;
				text-align: center;
				border-radius: 100%;

				&:hover {
					box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

					span {
						margin-right: 2px;
						opacity: 1;
						display: inline;
					}
				}

				span {
					opacity: 0;
					display: none;
					position: relative;
					font-size: 12px;
					transition: all 0.5s ease-in-out;
				}

			}

			.icon-back {
				display: inline-block;
				font-size: 20px;
				vertical-align: sub;
			}
		}

		.content {
			color: #4C4143;
			width: auto;
			text-wrap: wrap;
			word-wrap: break-word;
			white-space: pre-wrap;

			.img {
				width: 358px;
				margin: 20px auto;
			}

			.item-txt {
				font-size: 12px;
				line-height: 20px;
			}
		}
	}
}
</style>
