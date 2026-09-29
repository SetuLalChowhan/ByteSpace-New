import React from "react";
import Image from "next/image";
import ReviewCard from "@/components/cards/ReviewCard";
import { reviewsData } from "@/utils/Data";
import { Title44, Title18 } from "@/components/common/Typho";
import { MotionStagger, MotionItem } from "@/components/common/MotionWrapper";
import reviewBg from "@/assets/review/reviewBg.png";

interface ReviewSectionProps {
    className?: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ className = "" }) => {
    return (
        <section
            className={`relative w-full overflow-hidden  py-16 sm:py-20 ${className}`}
        >
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src={reviewBg}
                    alt="Review Background Pattern"
                    fill
                    priority
                    className="object-cover object-center select-none"
                />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 w-full Container section-padding-x flex flex-col">
                {/* Header: Title on Left, Description on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center justify-between">
                    <Title44 className="text-left text-[#000000] max-w-[480px]">
                        Discover What Our
                        <br />
                        Community Is Saying
                    </Title44>

                    <Title18 className="text-left text-[#4F4F4F]! max-w-[560px] lg:ml-auto">
                        At ByteSpace, our vibrant community of learners and creators is at the
                        heart of what we do. Hear directly from those who have experienced the
                        transformative journey of learning and creating on our platform.
                        Explore testimonials that reflect the diverse perspectives of
                        enthusiastic learners and accomplished creators.
                    </Title18>
                </div>

                {/* Reviews 3-Column Grid */}
                <MotionStagger
                    staggerDelay={0.14}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full mt-10 sm:mt-14 md:mt-16"
                >
                    {reviewsData.map((item) => (
                        <MotionItem key={item.id} className="h-full flex">
                            <ReviewCard
                                name={item.name}
                                role={item.role}
                                avatar={item.avatar}
                                review={item.review}
                            />
                        </MotionItem>
                    ))}
                </MotionStagger>
            </div>
        </section>
    );
};

export default ReviewSection;