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
	title: '学做一个会沟通的人',
	cont: [
		{
			img: '/article/art4-1.png',
			txt: [
				'如果你推荐的候选人被友商做了2次推荐并进入到offer阶段了怎么办？前段时间一直慢慢做的岗位突然比较着急，当周推荐了2位候选人，后来也追过几次面试，但客户也比较忙，一直说等一等，我也是想当然的认为岗位不着急，就没继续追，后来发现曾经推荐过的候选人已经进到final，而且是被其他猎头后期推进的。',
				' ',
				'虽然最终候选人算我们归属权，但是整个沟通过程也耗费客户很多力气。 懊悔为什么其他猎头推荐的能让客户看到，我更早推荐的客户看不到呢？ 默默告诉自己以后一定避免类似事情，思考我能做些什么？保持和客户紧密沟通，如果能减少主观判断，主动向客户求证，获得最终反馈，候选人是否匹配，不匹配的原因，凡事都有一个结果，能减少很多问题。同时，这件事也引发了我对沟通的思考。',
				' ',
				'沟通无处不在，什么是沟通，沟通是人们分享信息、思想和情感的过程。作为猎头，我们不仅要和候选人，同事沟通，也要和客户沟通，这个职业，让我们无时无刻不在沟通和交流。大家在平时的工作中，也需要合作，需要和不同部门的人打交道，可以说，沟通是一项大家需要不断提升的能力。',
				' ',
				'良好的沟通可以帮助组织内部成员的相互理解和默契，可以促进与客户公司之间的合作关系，对于个人而言也可以减少信息传递和接收的差异，提高工作效率.',
				' ',
				'如何学做一个会沟通的人呢，有以下三点建议。'
			],
		},
		{
			img: '/article/art4-2.png',
			txt: [
				'对一些内向社恐的人来说，每次给对方发消息会有一些心理负担，会害怕打扰别人，怕给对方造成不好的印象，怕被拒绝。我就是个典型的社恐，在社交场合或者会议中，希望自己是隐形人，不想让其他人关注到我，不太愿意发表个人意见，害怕被批评。',
				' ',
				'自加入到Csuite之后我改变很多，我们团队的氛围就是鼓励每一个人去发言，汇报，和客户沟通，增加曝光度。我刚开始也很不适应，觉得太难，但是如果不做，也会被批评。在同事们和领导的鼓励下，尝试参与到客户会议中去，也了解到客户也是人，也会听取你的建议，获得正向反馈后也就慢慢地克服了这种恐惧。',
				' ',
				'1、对方更喜欢被push，我们是在协助对方完成工作，对方会出于有了合作伙伴的积极推进，项目顺利完成而感激。若项目一直没进展，作为在一线打仗的人，信息没有及时反馈，对方不清楚遇到哪些问题，如何协调解决，也会着急，反而不利于长久的合作关系，这是和客户会议受到的启发。项目推进过程多多少少遇到一些问题，自我消化且长时间没有反馈，站在我的角度是怕打扰客户，但是客户觉得应该积极找他们沟通和讨论。',
				' ',
				'2、如果担心碰壁，被拒绝，我们也应该积极沟通，和他人建立联系，共同完成工作，这就是我们的本职工作和职责。并且不管是生活还是工作，都无法避免和人打交道。也要认识到，我们说的话做的事，不太可能让每个人都喜欢。',
				' ',
				'3、其实大多数人都有社交需求，哪怕看着冷漠，不好相处，内心也不一定实际如此，不论在公司有多高的职级，挣多高的薪资，在社会中也是一个有感情的活生生的人，我们也发现，大多数职级越高，薪资越高的人更亲切，相处起来更舒服，合作更高效。'
			],
		},
		{
			img: '/article/art4-3.png',
			txt: [
				'1、对事不对人，大家在平时的生活和工作中会遇到各种各样的问题，不是所有时候都能保证自己或对方处于良好的状态。无论在何种情况下，都要做到冷静地分析问题，尽量避免情绪的宣泄。',
				' ',
				'2、明确目的，沟通的主要目的就是为了解决问题，大家一起寻求解决方案。每个人的性格不同，表达方式也不一样，但我们要知道大家一起合作，不论是和领导，下属，或是平级的同事们，都是基于共同的目标。',
				' ',
				'3、及时沟通，不论有任何的情况，都不能悄无声息，做到凡事有交代，件件有着落，事事有回音。举猎头工作为例，推荐了的候选人一定要追到反馈，是否要安排面试，如果不能安排，一定要问到原因。如果项目进展困难，也要保证和客户公司的沟通，我们做了哪些努力，难点在哪里，需要对方提供哪些帮助。',
			],
		},
		{
			img: '/article/art4-4.png',
			txt: [
				'1、关于内容，结论先行，再补充细节，表达要有逻辑，不能绕。工作和生活不一样，大家每天工作的时间有限，工作上的交流不像朋友之间唠嗑，尤其对于我们猎头这份高压力高强度的工作来说，更要高效沟通。比如说向上级领导汇报工作的时候，要把重点结论提出来，如果对方感兴趣，再进行相关补充。',
				' ',
				'2、考虑对象，多站在对方角度思考问题，大家的工作和生活背景不同，基于地域，行业，专业限制，职级不同，大家对同一句话，同一个字都会有不同的理解。很多我们自己知道的，对方不一定理解，因此信息在传递的过程中会有一定的差异性。信息传递者可以在沟通过程中举些例子，信息接受者可以复述关键要点，和对方确认理解的是否正确。',
				' ',
				'3、考虑地点，如果是比较重要的会议，要提前准备好自己要分享的内容，辅以数据或者报表，可以让大家看的更清晰的了解。如果是平时简单的例会，就不要拖沓，表达重要的信息，节省大家的时间。',
				' ',
				'以上这些建议是平时工作的经验总结，希望可以给大家一些启发，愿大家在工作中都能做一个会沟通的人。',
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
